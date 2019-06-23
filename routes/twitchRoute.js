module.exports = (app) => {
  const consulTwitch = require("../helpers/consulTwitch");
  const requestor = require('../services/requestor');

  app.get("/api/v1/nerdbay/twitch", (req, res) => {
    consulTwitch().then(config => {
      const twitchUrl = `https://api.twitch.tv/kraken/streams?client_id=${config}`
      requestor(twitchUrl).then(data => {
        res.send(data)
      }).catch(err => res.status(404).send(err.response))
    }).catch(err => res.status(404).send(err))
  })
}