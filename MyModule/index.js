const a=10;

const multiply = (a,b)=>{
    console.log(`multiplication of numbers are ${a*b}`);
}

const add = (a, b)=>{
    console.log(`addition of numbers are ${a+b}`);
}

const sub = (a, b)=>{
    console.log(`subtraction of numbers are ${a-b}`);
};

// module.exports ={
//     multiply: multiply,
//     add: add,
//     sub: sub,
// };

// object shorthand syntax 
module.exports ={
    multiply,
    add,
    sub,
}
// es6 modules 
//export default multiply
// import multiply frm './index'

// using commonJS