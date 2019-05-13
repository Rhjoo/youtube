const _ = require('lodash');
const data2018 = require('./data2018.json');

console.log(data2018.length);  

data01 =[];
data02 =[];
data03 =[];
data04 =[];
data05 =[];
data06 =[];
data07 =[];
data08 =[];
data09 =[];
data10 =[];
data11 =[];
data12 =[];

data2018.forEach(function(item) {
  const monthRegEx = /2018-(?=01)/
  if (monthRegEx.test(item.time)) {
    data01.push(item)
  }
})

data2018.forEach(function(item) {
  const monthRegEx = /2018-(?=02)/
  if (monthRegEx.test(item.time)) {
    data02.push(item)
  }
})

data2018.forEach(function(item) {
  const monthRegEx = /2018-(?=03)/
  if (monthRegEx.test(item.time)) {
    data03.push(item)
  }
})

data2018.forEach(function(item) {
  const monthRegEx = /2018-(?=04)/
  if (monthRegEx.test(item.time)) {
    data04.push(item)
  }
})

data2018.forEach(function(item) {
  const monthRegEx = /2018-(?=05)/
  if (monthRegEx.test(item.time)) {
    data05.push(item)
  }
})

data2018.forEach(function(item) {
  const monthRegEx = /2018-(?=06)/
  if (monthRegEx.test(item.time)) {
    data06.push(item)
  }
})

data2018.forEach(function(item) {
  const monthRegEx = /2018-(?=07)/
  if (monthRegEx.test(item.time)) {
    data07.push(item)
  }
})

data2018.forEach(function(item) {
  const monthRegEx = /2018-(?=08)/
  if (monthRegEx.test(item.time)) {
    data08.push(item)
  }
})

data2018.forEach(function(item) {
  const monthRegEx = /2018-(?=09)/
  if (monthRegEx.test(item.time)) {
    data09.push(item)
  }
})

data2018.forEach(function(item) {
  const monthRegEx = /2018-(?=10)/
  if (monthRegEx.test(item.time)) {
    data10.push(item)
  }
})

data2018.forEach(function(item) {
  const monthRegEx = /2018-(?=11)/
  if (monthRegEx.test(item.time)) {
    data11.push(item)
  }
})

data2018.forEach(function(item) {
  const monthRegEx = /2018-(?=12)/
  if (monthRegEx.test(item.time)) {
    data12.push(item)
  }
})

console.log(data01.length);
console.log(data02.length);
console.log(data03.length);
console.log(data04.length);
console.log(data05.length);
console.log(data06.length);
console.log(data07.length);
console.log(data08.length);
console.log(data09.length);
console.log(data10.length);
console.log(data11.length);
console.log(data12.length);
