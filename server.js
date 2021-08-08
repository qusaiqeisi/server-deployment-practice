'use strict';
const express = require ('express');
const app = express();

const notFoundHandler = require('./handlers/404')
const errorHandler  = require('./handlers/500')





function start(port){
    app.listen(port,()=>console.log(`lisiting to port ${port}`))
}

app.get('/',(req,res)=>{
    res.send('hello from home page :)')
});


app.post('/bad',(req,res)=>{
    let number = 12 ;
    number.forEach(x=>console.log(x));
    res,send('this Bad Connection Rout ')
})


app.get('/data', (req, res)=> {
    res.json({
       id: 1, 
       name: "Test weather",
       email: "weather@weather.com"
    });
});


app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
    app: app,
    start: start
}