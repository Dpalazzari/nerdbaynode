test('Requestor retrieves data for Denver from weather API', () => {
  const consulArticles = require("../../helpers/consulArticles");
  const requestor = require('../../services/requestor');
  consulArticles().then(config => {
    const ArticlesUrl = `https://newsapi.org/v1/articles?apiKey=${config}&source=ign&sortBy=top`
    requestor(ArticlesUrl).then(data => {
      expect(typeof data).toBe('object')
    }).catch(err => console.log(err))
  }).catch(err => console.log(err))
})