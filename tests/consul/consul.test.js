const { articles, movies, twitch, weather } = require('../../src/helpers/consul');

test('Consul returns weather API key', () => {
  weather()
    .then(config => expect(typeof config).toBe("string"))
    .catch(err => console.log(err))
})

test('Consul returns twitch API key', () => {
  twitch()
    .then(config => expect(typeof config).toBe("string"))
    .catch(err => console.log(err))
})

test('Consul returns movie API key', () => {
  movies()
    .then(config => expect(typeof config).toBe("string"))
    .catch(err => console.log(err))
})

test('Consul returns IGN articles API key', () => {
  articles()
    .then(config => expect(typeof config).toBe("string"))
    .catch(err => console.log(err))
})