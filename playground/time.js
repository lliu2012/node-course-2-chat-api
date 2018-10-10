// jan 1st 1970

var moment = require('moment');

var createdAt = 1234;

var date = moment(createdAt);

// date.add(1, 'year').subtract(9, 'months');

console.log(date.format('h:mm a'));

// var date = new Date();

// console.log(date.getMonth());
