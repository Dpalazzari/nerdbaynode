test('Requestor retrieves data for Denver from weather API', () => {
  const consulWeather = require("../helpers/consulWeather");
  const requestor = require('../services/requestor');
  consulWeather().then(config => {
    const city = 'Denver'
    const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?appid=${config}&units=metric&q=${city}`
    requestor(weatherUrl).then(data => {
      expect(typeof data).toBe('object')
    }).catch(err => console.log(err))
  }).catch(err => console.log(err))
})