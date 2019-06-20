test('Consul returns IGN articles API key', () => {
  const consulArticles = require("../../helpers/consulArticles");
  consulArticles()
    .then(config => expect(typeof config).toBe("string"))
    .catch(err => console.log(err))
})