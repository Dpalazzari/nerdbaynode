let consul = require('consul')();

const weatherKey = () => {
  return new Promise((resolve, reject) => {
    consul.kv.get('nerdbay/weather', (err, config) => {
      (err) ? reject(error) : resolve(JSON.parse(config.Value))
    })
  })
}

module.exports = weatherKey;