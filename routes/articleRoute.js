module.exports = (app) => {
  const consulArticles = require("../helpers/consulArticles");
  const requestor = require('../services/requestor');

  app.get("/api/v1/nerdbay/articles", (req, res) => {
    consulArticles().then(config => {
      const articlesUrl = `https://newsapi.org/v1/articles?apiKey=${config}&source=ign&sortBy=top`
      requestor(articlesUrl).then(data => {
        res.send(data)
      }).catch(err => res.status(404).send(err.response))
    }).catch(err => res.status(404).send(err))
  })
}