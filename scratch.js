// const _ = require('lodash')

// data = [ { "date": "2018-05-19", "name": "hello"},
//          { "date": "2018-06-27", "name": "goodbye"} ]

// console.log(data.length)

// data05 =[];

// data.forEach(function(item) {
//   const monthRegEx = /2018-(?=05)/
//   if (monthRegEx.test(item.date)) {
//     data05.push(item)
//   }
// })

// console.log(data05)
const rp = require('request-promise');
const apikey = require('./apikey');
const convertTime = require('./convertTime');

const baseUrl = 'https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=';
const data = require('./sample10.json');

data.forEach(function(video) {
  const titleUrl = video.titleUrl;
  const videoId = titleUrl.slice(-11);
  const url = `${baseUrl}${videoId}&key=${apikey}`;
  rp(url)
    .then(function(res) {
      const json = JSON.parse(res);
      const duration = json.items[0].contentDetails.duration;
      const category = json.items[0].snippet.categoryId;
      console.log(duration);
      console.log(category);
      console.log(convertTime(duration));
    })
    .catch(function (err) {
      console.log(err);
    })
  // request.get(url, (err, res, body) => {
  //   const json = JSON.parse(body);
  //   console.log(json.items[0].snippet.categoryId);
    // const duration = json.items[0].contentDetails.duration;
    // const category = json.items[0].snippet.categoryId;
    // console.log(duration);
    // console.log(category);
    // console.log(convertTime(duration));
  // });
});