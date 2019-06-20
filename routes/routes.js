module.exports = (app) => {
  const ekgRouter = require('../routes/ekgRoute')
  const weatherRouter = require('../routes/weatherRoute')
  const articleRouter = require('../routes/articleRoute')

  ekgRouter(app)
  weatherRouter(app)
  articleRouter(app)
}