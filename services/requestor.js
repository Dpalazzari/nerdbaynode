const request = require('request-promise');

const requestor = (url) => {
  return new Promise((resolve, reject) => {
    request(url)
      .then(res => {
        resolve(JSON.parse(res))
      })
      .catch(err => reject(err))
  })
}

module.exports = requestor;