const {add, multiply} = require('mymodule-for-aj');
// const calculation = requestAnimationFrame('mymodule-for-aj');

// it runs the whole code written int the file we are using require on
const {name, address} = require('./info')
// console.log(calculation);
// calculation.add(10,5);
// calculation.multiply(9,4);

console.log(`name is ${name}`);
console.log(`address is ${address}`);
add(10, 4);
multiply(3, 4);