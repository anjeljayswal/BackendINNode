const Event = require('events');
const { removeListener, listeners } = require('process');

const Login = new Event();
// const SingUp = new Event();

//Login
// Login.addListener('success', () =>{
//     console.log('user is logged in successfully');
// })

// Login.emit('error'); //give error because javaScript  is aync

// Login.addListener('error', () =>{
//     console.log('error while lgging in user');
// })
// Login.emit('success'); //callback function.
// // Login.emit('success');
// Login.emit('error');
// // Login.emit('error');

Login.addListener('success', (username, country) => {
    console.log(`${username} logged in successfully ${country}`);
})

Login.emit('success', 'Raj', 'Nepal');//Raj

Login.addListener('success', () => {
    console.log('added the logs in file');
})

Login.addListener('error', () => {
    console.log('error while lgging in user');
})
Login.emit('success', 'Anjali', 'Nepal'); //Anjali
// Login.emit('success', 'Aayans', 'India'); //Anyans
// Login.emit('success', 'Krishav','China'); // Krishav


// Signup flow
const SingUp = new Event();

// const successSingUp1 = (name) =>{
//     console.log(`first singup is successful for ${name}`)
// }
// const successSingUp2 = (name) =>{
//     console.log(`second singup is successful second`)
// }

// SingUp.addListener('success', successSingUp1);
// SingUp.on('success', successSingUp2);

//runs only one time

SingUp.once('success', () =>{
    console.log('running only once');
})

SingUp.emit('success', 'Anjali');

// removeListener removes one listener whatever we pass as a second argument 
// SingUp.removeListener('success', successSingUp1);
// SingUp.off('success', successSingUp1);

// remove all the listeners for that event 
// SingUp.removeAllListeners('success');

SingUp.emit('success', 'Ashish');

//deprecated
console.log(SingUp.listenerCount('success'));


// Login.emit('error');
