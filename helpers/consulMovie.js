let consul = require('consul')();

const ArticlesKey = () => {
  return new Promise((resolve, reject) => {
    consul.kv.get('nerdbay/movie', (err, config) => {
      (err) ? reject(error) : resolve(JSON.parse(config.Value))
    })
  })
}

module.exports = ArticlesKey;