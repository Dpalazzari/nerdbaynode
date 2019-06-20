module.exports = (app) => {
  const ekgRouter = require('../routes/ekgRoute')
  const weatherRouter = require('../routes/weatherRoute')

  ekgRouter(app)
  weatherRouter(app)
}