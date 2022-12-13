const  mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    user_id : {type : Number},
     name : {type : String}, 
     address : {type : String}, 
     city : {type : String}
})

const User = new mongoose.model("User" , UserSchema)

module.exports = User