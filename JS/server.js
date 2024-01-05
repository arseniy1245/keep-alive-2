
const fs = require('fs');
const express = require('express');
const app = express();


const api = require('./api');
const PORT = process.env.PORT || 3333

app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.urlencoded({extended: true}));
app.use(api)



app.get('/',(req,res)=>{
    let html = 
    `
    <style>
    html {
        height: 100vh;
        width: 100vw;
        margin: 0;
        padding: 0;
    }
    h1 {
        text-align: center;
        margin-top: 20%;
        font-size: 100px;
        font-family: monospace;
        cursor: default;
        user-select: none;
    }
  
    </style>
    <html><head></head><body><h1>Keep alive <br>(For more see Github)</h1></body></html>
    `
    res.send(html)
});


app.listen(PORT, ()=>{});