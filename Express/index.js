const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    res.send('Default page using express');

})

app.get('/login', (req, res) =>{
    res.send('<h2>Login page...</h2>');
})

app.get('/data', (req, res) =>{
    res.send({name: 'Anjali'})
})

const PORT = 5500;
app.listen(PORT, () =>{
    console.log(`express server running at ${PORT}`)
})