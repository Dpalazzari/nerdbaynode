module.exports = (app) => {
  const {weather} = require("../helpers/consul");
  const requestor = require('../services/requestor');

  app.get("/api/v1/nerdbay/weather/:city", (req, res) => {
    const city = req.params.city
    weather().then(config => {
      const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?appid=${config}&units=metric&q=${city}`
      requestor(weatherUrl).then(data => {
        res.send(data)
      }).catch(err => res.status(404).send(err.response))
    }).catch(err => res.status(404).send(err))
  })
}