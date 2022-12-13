const  mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    product_id : {type : Number},
     name : {type : String}, 
     size : {type : Number}, 
     price : {type : Number},
     availabil_qts : {type : Number}
})

const product = new mongoose.model("product" , productSchema)
module.exports = product