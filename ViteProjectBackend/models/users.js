var mdb = require('mongoose')  
var userSchema = mdb.Schema({  //defines Structure of the collecton or table
    firstName:String, 
    lastName:String,
    email:String,
    password:String
})
var user_schema= mdb.model("users",userSchema) //using model we could get input for the record
module.exports = user_schema;
