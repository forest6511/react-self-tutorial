// $ node ./app/playground/moment-example.js

// see https://momentjs.com/docs/

var moment = require('moment');

moment.locale('ja');

console.log(moment().format());

console.log(moment().format('MMMM Do YYYY, h:mm:ss a')); // 5月 18日 2017, 5:05:29 午前

var now = moment();
console.log('Current timestamp', now.unix());

var currentMoment = moment.unix(1495051311);

console.log('Current Moment', currentMoment.format());

console.log('MMM format' , moment().format('MMM')); // 5月

console.log(moment().format('YYYY年 MMMM Do @ h:mm:ss a')); // 2017年 5月 18日 @ 5:10:40 午前

console.log(moment().format('YYYY/MMMM/Do h:mm:ss a')); // 2017/5月/18日 5:11:38 午前

console.log(moment().format('YYYY/MMMM/Do hh:mm:ss a'));



