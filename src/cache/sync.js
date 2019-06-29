const consulObj = require('../helpers/consul');
const requestor = require('../services/requestor');
const util = require('util')

const arr = new Array('movies', 'twitch', 'espn', 'ign', 'hacker-news', 'reddit-r-all');

const runCache = async (setAsync, delAsync) => {
  for (let element of arr){
    let config, url;
    try {
      util.log(`Deleting ${element} cache.`);
      await delAsync(element);
      switch (element) {
        case 'espn':
        case 'ign':
        case 'hacker-news':
        case 'reddit-r-all':
          config = await consulObj['articles']();
          url = `https://newsapi.org/v1/articles?apiKey=${config}&source=${element}&sortBy=top`;
          break;
        case 'movies':
          config = await consulObj[element]();
          url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${config}`;
          break;
        case 'twitch':
          config = await consulObj[element]();
          url = `https://api.twitch.tv/kraken/streams?client_id=${config}`;
          break;
      }
      const data = await requestor(url);
      const jsonData = JSON.stringify(data);
      const res = await setAsync(element, jsonData);
      util.log(`Redis cache ${element} populated with data. Status: ${res}.`);
    } catch(err){
      util.error(err);
    }
  }
}

module.exports = runCache;