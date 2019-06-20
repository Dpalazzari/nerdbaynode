let consul = require('consul')();

const weatherKey = () => {
  return new Promise((resolve, reject) => {
    consul.kv.get('nerdbay/articles', (err, config) => {
      if (err) {
        reject(error);
      } else {
        resolve(JSON.parse(config.Value));
      }
    })
  })
}

module.exports = weatherKey;