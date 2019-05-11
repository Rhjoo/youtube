const _ = require('lodash');
const data = require('./youtube-watch-history.json');

console.log(data.length);
console.log(_.filter(data, _.conforms({ "time": (item) =>  _.startsWith(item, "2018")})));
  