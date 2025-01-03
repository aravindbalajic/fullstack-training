var express = require('express')
var path = require('path')
var mdb = require('mongoose')
var User = require('./models/users')

var app = express()
const PORT = 3001;

app.use(express.json())

mdb.connect("mongodb://localhost:27017/KEC").then(() => {//  mongodb://127.0.0.1:27017 Both are same.
    console.log("MongoDB Connection Successful")
}).catch(() => {
    console.log("Check your Connection String")
})

app.get('/', (req, res) => {
    res.send("Welcome to Backend Server")
})

app.get('/json', (req, res) => {
    res.json("Welcome to Backend Server")
})

app.get('/static', (req, res) => {
    console.log(__dirname)//prints pathname
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.post('/signup', (req, res) => {
    console.log(req.body)
    var { firstName, lastName, email } = req.body //since destructing is done from body curly brackets are used instaed of square brackets.
    console.log(firstName, lastName, email);
    try {
        var newUser = new User({
            firstName: firstName,
            lastName: lastName,
            email: email
        })
        newUser.save();
        console.log("User added successfully")
        res.status(200).send("User Added Successfully")
    }
    catch (err) {
        console.log(err)
    }
})

app.get('/getsignup',(req,res)=>{
    try{
        var allSignUpRecords=User.find()
        res.json(allSignUpRecords)
        console.log("All Data Fetched")
    }
    catch(err){
        console.log("Cant able to read the Record")
    }
})

app.listen(PORT, () => {//Always use this anonymous Function
    console.log("Backend Server Started running on port " + PORT);
})