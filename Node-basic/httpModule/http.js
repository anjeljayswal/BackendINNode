const http = require('http');
// const { url } = require('inspector');

//  createServer has two argument request and response 
// It take all request from server and give response to the clinet
// request received come from method 
const server = http.createServer((req, res) =>{
    // console.log('req received');
    // console.log('req is', req);
    // console.log('headers', req.headers);
    console.log('url', req.url);
    if(req.url === '/'){
        res.write('<h2>Default Pages</h2>');
    }else if(req.url ==='/home'){
        res.end('<h2>Home Page</h2>');
    }else if(req.url ==='/login'){
        // first check gthe userin DB 
        // if passed then check the password
        // if passed then move the user to home page 
        res.end('<h2>Login Page</h2>');
    }else{
        res.end('sending response');
    }
    res.end()
   
})
// // http internally implements Event module 
// server.on('error', ()=>{
//     console.log('error inside server ');
// })
// server.emit('error');

const PORT = 9000;
server.listen(PORT, () =>{
    console.log(`server is running at ${PORT}`);
})

// function calculate(a,b){
//     return a+b;
// }
// const res =calculate(10,40);






// to quit from terminal ctr+c 