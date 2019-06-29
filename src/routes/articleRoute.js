module.exports = (app, get) => {
  app.get("/api/v1/nerdbay/articles/:source", (req, res) => {
    const redisKey = req.params.source;
    console.log(redisKey)
    (redisKey === '') ? res.status(404).send('Invalid route.') :
    get(redisKey).then(data => {
      const parsedData = JSON.parse(data);
      res.send(parsedData);
    }).catch(err => res.status(404).send(err))
  })
}