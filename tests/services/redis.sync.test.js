const arr = new Array('movies', 'twitch', 'espn', 'ign', 'hacker-news', 'reddit-r-all');

const runTestCache = async (setAsync, delAsync) => {
  for (let element of arr) {
    try {
      console.log(`Deleting ${element} cache.`);
      await delAsync(element);
      const data = {
        name: 'babooshka',
        game: 'Witcher 3',
        same: true,
        dame: 'Stephanie',
        fame: 'only if my friends still love me',
        came: true,
        lame: ['no', false, null]
      }
      const jsonData = JSON.stringify(data);
      const res = await setAsync(element, jsonData);
      console.log(`Redis cache ${element} populated with data. Status: ${res}.`);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = runTestCache;