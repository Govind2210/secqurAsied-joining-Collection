const  mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema({
    order_id : {type : Number},
    user_id : {type : Number}, 
    product_id : {type : Number}, 
    date_of_purchase : {type : Date},
    item_qty : {type : Number}
})

const Order = new mongoose.model("order" , OrderSchema)
module.exports = Order