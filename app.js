const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.locals.title = 'Deadpool backend';

const redis = require('redis');
const client = redis.createClient({
  host: 'localhost',
  port: '6379'
});

client.on('error', (err) => {
  console.log('Error ' + err);
})

const { promisify } = require('util');
const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);
const delAsync = promisify(client.del).bind(client);


const runCache = require('./cache/sync');
runCache(setAsync, delAsync);

setInterval(() => {
  runCache(setAsync, delAsync);
}, 60 * 60 * 1000);

let routes = require('./routes/routes');
routes(app, getAsync);

module.exports = app;