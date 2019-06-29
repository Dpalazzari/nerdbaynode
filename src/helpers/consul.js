let consul = require('consul')();

const articles = () => {
  return new Promise((resolve, reject) => {
    consul.kv.get('nerdbay/articles', (err, config) => {
      (err) ? reject(error) : resolve(JSON.parse(config.Value))
    })
  })
}

const movies = () => {
  return new Promise((resolve, reject) => {
    consul.kv.get('nerdbay/movie', (err, config) => {
      (err) ? reject(error) : resolve(JSON.parse(config.Value))
    })
  })
}

const twitch = () => {
  return new Promise((resolve, reject) => {
    consul.kv.get('nerdbay/twitch', (err, config) => {
      (err) ? reject(error) : resolve(JSON.parse(config.Value))
    })
  })
}

const weather = () => {
  return new Promise((resolve, reject) => {
    consul.kv.get('nerdbay/weather', (err, config) => {
      (err) ? reject(error) : resolve(JSON.parse(config.Value))
    })
  })
}

module.exports = {
  articles,
  movies,
  twitch,
  weather
}