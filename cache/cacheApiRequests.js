const consulArticles = require('../helpers/consulArticles');

const consulTwitch   = require('../helpers/consulTwitch');

const requestor = require('../services/requestor');
const cacher    = require('./cacher');

const initCache = async (cache) => {
  // twitch
  try {
    const twitchConfig = await consulTwitch();
    const twitchUrl = `https://api.twitch.tv/kraken/streams?client_id=${twitchConfig}`;
    const twitchData = await requestor(twitchUrl);
    cache = await cacher(cache, "twitch", twitchData);
  } catch(err){
    console.error(err);
  }

  // movies
  
  
  // Reddit
  let articlesConfig;
  try {
    articlesConfig = await consulArticles();
  } catch(err){
    console.log(err)
  }
  
  try {
    const redditUrl = `https://newsapi.org/v1/articles?apiKey=${articlesConfig}&source=reddit-r-all&sortBy=top`;
    const redditData = await requestor(redditUrl);
    cache = await cacher(cache, 'reddit', redditData);
  } catch (err) {
    console.error(err);
  }

  // ESPN
  try {
    const espnUrl = `https://newsapi.org/v1/articles?apiKey=${articlesConfig}&source=espn&sortBy=top`;
    const espnData = await requestor(espnUrl);
    cache = await cacher(cache, 'espn', espnData);
  } catch (err) {
    console.error(err);
  }

  // IGN
  try {
    const ignUrl = `https://newsapi.org/v1/articles?apiKey=${articlesConfig}&source=ign&sortBy=top`;
    const ignData = await requestor(ignUrl);
    cache = await cacher(cache, 'ign', ignData);
  } catch (err) {
    console.error(err);
  }

  // Hacker News
  try {
    const hackernewsUrl = `https://newsapi.org/v1/articles?apiKey=${articlesConfig}&source=hacker-news&sortBy=top`;
    const hackernewsData = await requestor(hackernewsUrl);
    cache = await cacher(cache, 'hackernews', hackernewsData);
  } catch (err) {
    console.error(err);
  }

  return new Promise((resolve, reject)=> {
    (cache) ? resolve(cache) : reject("Error")
  })
}

module.exports = initCache;