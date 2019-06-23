let consul = require('consul')();

const TwitchKey = () => {
  return new Promise((resolve, reject) => {
    consul.kv.get('nerdbay/twitch', (err, config) => {
      (err) ? reject(error) : resolve(JSON.parse(config.Value))
    })
  })
}

module.exports = TwitchKey;