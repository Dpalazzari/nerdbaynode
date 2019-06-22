module.exports = (app) => {
  const consulMovie = require("../helpers/consulMovie");
  const requestor = require('../services/requestor');

  app.get("/api/v1/nerdbay/movies", (req, res) => {
    consulMovie().then(config => {
      const movieUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${config}`
      requestor(movieUrl).then(data => {
        res.send(data)
      }).catch(err => res.status(404).send(err.response))
    }).catch(err => res.status(404).send(err))
  })
}