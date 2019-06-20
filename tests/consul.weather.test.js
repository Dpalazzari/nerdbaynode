test('Consul returns weather API key', () => {
  const consulWeather = require("../helpers/consulWeather");
  consulWeather()
  .then(config => expect(typeof config).toBe("string"))
  .catch(err => console.log(err))
})