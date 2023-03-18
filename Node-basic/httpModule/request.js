const http = require('http');

http.request('http://localhost:9000/login', (res)=>{
    console.log('response received');
    res.setEncoding('utf-8')
    res.on('data', (mydata)=>{
        console.log('getting response data here');
        console.log(mydata+'');
    })
})
.end()
