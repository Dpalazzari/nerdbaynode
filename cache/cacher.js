module.exports = (cache, key, data) => {
  return new Promise((resolve, reject)=> {
    let success = cache.set(key, data);
    (success) ? resolve(cache) : reject('Error');
  })
}