module.exports = (app) => {
  const ekgRouter = require('../routes/ekgRoute')

  ekgRouter(app)
}