var express = require('express')
var app = express()
const PORT=3001;

app.get('/',(req,res)=>{
    res.send("Welcome to Backend Server")
})

app.get('/json',(req,res)=>{
    res.json("Welcome to Backend Server")
})

app.get('/static',(req,res)=>{
    res.sendFile('E:/DATA/CODING/FULLSTACK/TRAINING/ViteProjectBackend/index.html')
})

app.listen(PORT,()=>{//Always use this anonymous Function
    console.log("Backend Server Started running on port " + PORT);
})