//const names = require('./names')
//const sayHi = require('./module')
//require('./numbers')
//sayHi('susan');
//sayHi(peter);
//sayHi(john);
const _ = require('lodash')
const items = [1,[2,[3,[4]]]]
const newitem = _.flattenDeep(items)
console.log(newitem)
