module.exports = (app) => {
  const consulArticles = require("../helpers/consulArticles");
  const requestor = require('../services/requestor');

  app.get("/api/v1/nerdbay/ign", (req, res) => {
    consulArticles().then(config => {
      const articlesUrl = `https://newsapi.org/v1/articles?apiKey=${config}&source=ign&sortBy=top`
      requestor(articlesUrl).then(data => {
        res.send(data)
      }).catch(err => res.status(404).send(err.response))
    }).catch(err => res.status(404).send(err))
  })

  app.get("/api/v1/nerdbay/hackernews", (req, res)=> {
    consulArticles().then(config => {
      const articlesUrl = `https://newsapi.org/v1/articles?apiKey=${config}&source=hacker-news&sortBy=top`
      requestor(articlesUrl).then(data => {
        res.send(data)
      }).catch(err => res.status(404).send(err.response))
    }).catch(err => res.status(404).send(err))
  })

  app.get("/api/v1/nerdbay/reddit", (req, res) => {
    consulArticles().then(config => {
      const articlesUrl = `https://newsapi.org/v1/articles?apiKey=${config}&source=reddit-r-all&sortBy=top`
      requestor(articlesUrl).then(data => {
        res.send(data)
      }).catch(err => res.status(404).send(err.response))
    }).catch(err => res.status(404).send(err))
  })
}