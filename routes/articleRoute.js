module.exports = (app) => {
  const consulArticles = require("../helpers/consulArticles");
  const requestor = require('../services/requestor');

  app.get("/api/v1/nerdbay/:source", (req, res) => {
    let source = req.params.source;
    let uriSourceKey;

    switch (source){
      case 'ign':
        uriSourceKey = 'ign';
        break;
      case 'reddit':
        uriSourceKey = 'reddit-r-all';
        break;
      case 'hackernews':
        uriSourceKey = 'hacker-news';
        break;
      case 'espn':
        uriSourceKey = 'espn';
        break;
      default:
        uriSourceKey = '';
        break;
    }

    (uriSourceKey === '') ? res.status(404).send('Invalid route.') :
    consulArticles().then(config => {
      const articlesUrl = `https://newsapi.org/v1/articles?apiKey=${config}&source=${uriSourceKey}&sortBy=top`
      requestor(articlesUrl).then(data => {
        res.send(data)
      }).catch(err => res.status(404).send(err.response))
    }).catch(err => res.status(404).send(err))
  })
}