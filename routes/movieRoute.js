module.exports = (app, get) => {
  app.get("/api/v1/nerdbay/movies", (req, res) => {
    get('movies').then(data => {
      const parsedData = JSON.parse(data);
      res.send(parsedData);
    }).catch(err => res.status(404).send(err))
  })
}