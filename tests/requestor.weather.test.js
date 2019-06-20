test('Requestor retrieves data for Denver from weather API', async () => {
  const consulWeather = require("../helpers/consulWeather");
  const requestor = require('../services/requestor');
  const config = await consulWeather()
  const city = 'Denver'
  const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?appid=${config}&units=metric&q=${city}`
  const data = await requestor(weatherUrl)
  expect(typeof data).toBe('object')
})