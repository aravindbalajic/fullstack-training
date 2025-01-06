const express = require('express');
const path = require('path');
const mdb = require('mongoose');
const User = require('./models/users');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Connect to MongoDB
mdb.connect("mongodb://localhost:27017/KEC")
    .then(() => {
        console.log("MongoDB Connection Successful");
    })
    .catch((err) => {
        console.error("Check your Connection String:", err);
    });

// Serve static files
app.get('/', (req, res) => {
    res.send("Welcome to Backend Server");
});

app.get('/json', (req, res) => {
    res.json("Welcome to Backend Server");
});

app.get('/static', (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve Signin page
app.get('/signin', (req, res) => {
    res.sendFile(path.join(__dirname, 'Signin.html'));
});

// Serve Signup page
app.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname,'Signup.html'))
})

//Update Page Serving
app.get('/update',(req,res)=>{
    res.sendFile(path.join(__dirname,'Update.html'))
})

// Signup route
app.post('/signup', async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            // If user is found, respond with a message
            return res.status(400).send("User already present");
        }
        else{
            const newUser = new User({
                firstName:firstName,
                lastName:lastName,
                email:email,
                password:password
            });
    
            await newUser.save();
            console.log("User added successfully");
            res.status(200).send("User Added Successfully");
        }
        
        
    } catch (err) {
        console.error("Error during signup:", err);
        res.status(500).send("Error Adding User");
    }
});

//Sigin Route
app.post('/signin',async (req,res)=>{
    try{
        const {email,password}=req.body;
        const existing=await User.findOne({email:email})
        console.log(existing)
        if(existing){
            if(existing.password===password){
                console.log("Login Successful")
                return res.send("User Login is Successful");
            }
            else{
                console.log("Login Invalid")
                return res.send("Enter a Valid Password");
            }
            
        }
        else{
            console.log("Login Invalid ")
            return res.send("User not found")
        }
    }
    catch(e){
        console.error("Error during signin:", err);
        res.send("An error occurred during signin");
    }
})

// Fetch all signup records
app.get('/getsignup', async (req, res) => {
    try {
        const allSignUpRecords =  await User.find();
        res.json(allSignUpRecords);
        console.log("All Data Fetched");
    } catch (err) {
        console.error("Unable to read the Record:", err);
        res.status(500).send("Error Fetching Records");
    }
});

//Deleting a record
app.get('/delete',async (req,res)=>{
    var {email}=req.body
    var deletingaccount = await User.deleteOne({email})
    console.log("Account Deleted")
    res.send("acc deleted")
})

app.post('/update',async (req,res)=>{
    try{
        var {email,fname,lname,password}=req.body;
        const exists = await User.findOne({email:email})
        if(exists){
            await User.updateOne({email:email},{$set:{firstName:fname,lastName:lname,password:password}})
            console.log("User Updated")
            res.send("Changes Done")
        }
        else{
            console.log("User Not found")
            res.send("Invalid User")
        }
    }
    catch(e){
        console.error(e);
    }
    
})

// Start the server
app.listen(PORT, () => {
    console.log("Backend Server Started running on port " + PORT);
});
