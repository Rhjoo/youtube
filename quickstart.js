const request = require('request');

const url = 'https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=_NIFz8wRvMs&key=AIzaSyBDg2LMbgpsaLz-JnfRhm8FNINu-lk3rsY';

request.get(url, (err, res, body) => {
  const json = JSON.parse(body);
  const duration = json.items[0].contentDetails.duration;
  const category = json.items[0].snippet.categoryId;
  console.log(duration);
  console.log(category);
});