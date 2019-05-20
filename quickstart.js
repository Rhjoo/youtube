const request = require('request');
const convertTime = require('./convertTime');
const apikey = require('./apikey');

const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=_NIFz8wRvMs&key=${apikey}`;

request.get(url, (err, res, body) => {
  const json = JSON.parse(body);
  const duration = json.items[0].contentDetails.duration;
  const category = json.items[0].snippet.categoryId;
  console.log(duration);
  console.log(category);
  convertTime(duration);
});



