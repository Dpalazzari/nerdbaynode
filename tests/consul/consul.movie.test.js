test('Consul returns movie API key', () => {
  const consulMovie = require("../../helpers/consulMovie");
  consulMovie()
    .then(config => expect(typeof config).toBe("string"))
    .catch(err => console.log(err))
})