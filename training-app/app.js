
const express= require('express'); 
const path= require ('path'); 
const http= require('cors'); 
const bodyParser = require ('body-parser'); 
const mongoose = require('mongoose'); 
const route=require('./routes/routes');

const port=3000; 

var app=express(); 

app.use(function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


app.use('/api',route); 

mongoose.connect('mongodb://asma:asma@ds133296.mlab.com:33296/ensit-project',{useMongoClient:true})
.then (()=>console.log('Connected to mongodb server at 27017 port')) 
.catch((err)=>console.log(err) ); 


app.listen(port,()=> {
    console.log(`Server started at port ${port}`);

})

app.get('/', (req,res)=>{
    res.send('Hi Asma!'); 
})

