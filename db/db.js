const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/secure").then(()=>{
    console.log("Connecting to the database")
})
.catch((error)=>{
    console.log("data base is not connected" , error)
})