const ekgRouter = require('../routes/ekgRoute')
const weatherRouter = require('../routes/weatherRoute')
const articleRouter = require('../routes/articleRoute')
const movieRouter = require('../routes/movieRoute')
const twitchRouter = require('../routes/twitchRoute')

module.exports = (app) => {
  ekgRouter(app)
  weatherRouter(app)
  articleRouter(app)
  movieRouter(app)
  twitchRouter(app)
}