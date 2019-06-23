test('Consul returns twitch API key', () => {
  const consulTwitch = require("../../helpers/consulTwitch");
  consulTwitch()
    .then(config => expect(typeof config).toBe("string"))
    .catch(err => console.log(err))
})