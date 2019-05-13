const _ = require('lodash')

data = [ { "date": "2018-05-19", "name": "hello"},
         { "date": "2018-06-27", "name": "goodbye"} ]

console.log(data.length)

data05 =[];

data.forEach(function(item) {
  const monthRegEx = /2018-(?=05)/
  if (monthRegEx.test(item.date)) {
    data05.push(item)
  }
})

console.log(data05)