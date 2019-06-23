test('Requestor retrieves data from Twitch API', () => {
  const consulTwitch = require("../../helpers/consulTwitch");
  const requestor = require('../../services/requestor');
  consulTwitch().then(config => {
    const twitchUrl = `https://api.twitch.tv/kraken/streams?client_id=${config}`
    requestor(twitchUrl).then(data => {
      expect(typeof data).toBe('object')
    }).catch(err => console.log(err))
  }).catch(err => console.log(err))
})