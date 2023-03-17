console.log('node js file'); // 1
const fs = require('fs');

console.log('start'); //2

setTimeout(() =>{
    console.log('timer 1');
},0)

// // 0 sec is not actively 0 sec, node adds a minimal delay from 

console.log('end'); //3

setImmediate(() =>{
    console.log('immidiately called');
})



fs.open('file1.txt', (err) => {
    // console.log(err);
    console.log('file openned successfully');
})
Promise.resolve().then(() => console.log('log from promise'));

process.nextTick(() =>{
    console.log('calling next tick');
})

