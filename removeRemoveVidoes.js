const _ = require('lodash')
const fs = require('file-system')

const data = require('./data2018.json')

const newData =[];

data.forEach(function(item) {
  if (item.titleUrl) {
    newData.push(item)
  }
})

fs.writeFile(
  './data2018_revised.json',
  JSON.stringify(newData, null, 2),
  (err) => err ? console.error('Data not written', err) : console.log('Data written')
);