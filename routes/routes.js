module.exports = (app) => {
  const ekgRouter = require('../routes/ekgRoute')
  const weatherRouter = require('../routes/weatherRoute')
  const articleRouter = require('../routes/articleRoute')
  const movieRouter = require('../routes/movieRoute')

  ekgRouter(app)
  weatherRouter(app)
  articleRouter(app)
  movieRouter(app)
}