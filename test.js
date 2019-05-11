const _ = require('lodash');
const fs = require('file-system');
const data = require('./youtube-watch-history.json');

console.log(data.length);  //23344
const data2019 = _.filter(data, _.conforms({ "time": (item) =>  _.startsWith(item, "2019")}));
console.log(data2019.length);
fs.writeFile(
  './data2019.json',
  JSON.stringify(data2019, null, 2),
  (err) => err ? console.error('Data not written', err) : console.log('Data written')
);