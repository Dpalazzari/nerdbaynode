module.exports = (app) => {
  app.get("/api/v1/nerdbay/ekg", (request, res) => {
    let pkg = require("../package.json")
    let obj = {
      status: 'Ready',
      version: pkg.version
    }
    res.send(obj)
  })
}