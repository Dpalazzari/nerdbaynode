const requestor = require('../services/requestor');
const cacher = require('./cacher');
const NodeCache = require("node-cache");
let myCache = new NodeCache();

const cacheSetter = async (url, key) => {
  try {
    const data = await requestor(url);
    myCache = await cacher(myCache, key, data);
  } catch(err) {
    console.error(err);
  }

  return new Promise((resolve, reject) => {
    (myCache) ? resolve(myCache) : reject(null)
  })
}

const cacheResetter = (cache, key) => {
  return new Promise((resolve, reject) => {
    value = cache.del(key);
    (value === 1) ? resolve(value) : reject(null)
  })
}

const cacheGetter = (cache, key) => {
  return new Promise((resolve, reject) => {
    let data = cache.get(key);
    (data) ? resolve(data) : reject(false);
  })
}

module.exports = {
  cacheSetter,
  cacheResetter,
  cacheGetter
}