const express = require('express');
const path = require('path');
const mdb = require('mongoose');
const User = require('./models/users');

const app = express();
const PORT = 3001;

app.use(express.json());

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

app.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname,'Signup.html'))
})

// Signup route
app.post('/signup', async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    try {
        const newUser = new User({
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password
        });

        
            await newUser.save();
            console.log("User added successfully");
            res.status(200).send("User Added Successfully");
            
        
        
    } catch (err) {
        console.error("Error during signup:", err);
        res.status(500).send("Error Adding User");
    }
});
////////////////////////////////////////////////////////////////////
// Signin route
app.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(404).json({ message: "User not found" });
        }
        if (existingUser.password!==password) {
            return res.status(401).json({ message: "Invalid password" });
        }

        res.status(200).json({ message: "Login Successful", isLoggedIn: true });
    } catch (err) {
        console.error("Login failed:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
//////////////////////////////////////////////////////////////////////////////////
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

app.get('/login',async (req,res)=>{
    res.sendFile(path.join(__dirname, 'Signin.html'))
    //var {email,password}=req.body
    try{
        var existingUser = await User.findOne({email:email})
        console.log(existingUser)
        res.json({message:"Login Successful,isLoggedIn:true"})
        
        
    }    
    catch(e){
        console.log(e)
    }   
})

app.get('/delete',async (req,res)=>{
    var {email}=req.body
    var deletingaccount = await User.deleteOne({email})
    console.log("Account Deleted")
    res.send("acc deleted")
})

// Start the server
app.listen(PORT, () => {
    console.log("Backend Server Started running on port " + PORT);
});
