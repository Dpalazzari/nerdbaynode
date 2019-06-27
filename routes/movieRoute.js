const { cacheSetter, cacheResetter, cacheGetter } = require('../cache/initCache');
const requestor = require('../services/requestor');
const NodeCache = require("node-cache");
let myCache = new NodeCache();
const consulMovie = require('../helpers/consulMovie');

module.exports = async (app) => {
  const key = 'movies';
  const interval = 60 * 60 * 1000;
  let movieUrl, config;

  try {
    config = await consulMovie();
    movieUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${config}`;
    console.log('Pulling down Movies Cache...');
    myCache = await cacheSetter(movieUrl, key);
  } catch(err){
    console.error(err);
  }

  setInterval( async() => {
    try {
      console.log('Pulling down new movies cache...');
      const value = await cacheResetter(myCache, key);
      config = await consulMovie();
      movieUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${config}`;
      myCache = (value) ? await cacheSetter(movieUrl, key) : new NodeCache();
    } catch (err) {
      console.error(err);
    }
  }, interval);

  app.get("/api/v1/nerdbay/movies", (req, res) => {
    cacheGetter(myCache, 'movies')
    .then(movieData => {
      res.send(movieData);
    }).catch(err => {
      console.log('cache is null...')
      requestor(movieUrl).then(data => {
        res.send(data)
      }).catch(err => res.status(404).send(err.response))
    })
  })
}