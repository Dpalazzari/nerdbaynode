module.exports = (app, get) => {
  app.get("/api/v1/nerdbay/articles/:source", (req, res) => {
    let source = req.params.source;
    let redisKey;

    switch (source){
      case 'espn':
      case 'ign':
        redisKey = source;
        break;
      case 'reddit':
        redisKey = 'reddit-r-all';
        break;
      case 'hackernews':
        redisKey = 'hacker-news';
        break;
      default:
        redisKey = '';
        break;
    }

    (redisKey === '') ? res.status(404).send('Invalid route.') :
    get(redisKey).then(data => {
      const parsedData = JSON.parse(data);
      res.send(parsedData);
    }).catch(err => res.status(404).send(err))
  })
}