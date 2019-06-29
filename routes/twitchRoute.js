module.exports = (app, get) => {
  app.get("/api/v1/nerdbay/twitch", (req, res) => {
    get('twitch').then(data=> {
      const parsedData = JSON.parse(data);
      res.send(parsedData);
    }).catch(err => res.status(404).send(err))
  })

  app.get("/api/v1/nerdbay/twitch/top", (req, res) => {
    get('twitch').then(data => {
      const parsedData = JSON.parse(data);
      res.send(parsedData.streams[0]);
    }).catch(err => res.status(404).send(err))
  })
}