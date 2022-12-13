const express = require("express")
const app = express();
const PORT = process.nextTick.PORT || 5000

// database
require("./db/db")

const User = require("./Model/User")
const product = require("./Model/Product")
const Order = require("./Model/Order")

app.use(express.json())

app.get("/" , (req ,res)=>{
    res.send("Hello ")
})

//User_id, user_name, city, product_id, product_name, color, size, item_qty, date_of_purchase

// post api to User 
app.post("/api/user" , async (req ,res)=>{
    try {
        const {user_id , name, address, city} = req.body;
        const newData = await User.create(req.body)
        res.json({status : " User is successfull store" , data : newData })
    } catch (error) {
        res.json({status : "Failed to save the User" , error})
    }
})

// post api to product 
app.post("/api/product" , async (req ,res)=>{
    try {
        const {product_id, name, size, color, price, availabil_qts} = req.body;
        const newData = await product.create(req.body)
        res.json({status : " product is successfull store"})
    } catch (error) {
        res.json({status : "Failed to save the product" , error})
    }
})

// post api to order 
app.post("/api/Order" , async (req ,res)=>{
    try {
        const {order_id, user_id, product_id, date_of_purchase, item_qty} = req.body;
        const newData = await Order.create(req.body)
        res.json({status : " Order is successfull store"})
    } catch (error) {
        res.json({status : "Failed to save the Order" , error})
    }
})

//  User_id , name , city , product_id , product_name , color , size , item_qty , date_of_purchase

app.get("/api/userDetails" , async (req ,res) =>{
    try {
        let userDeatils = await User.find()
        let productDetails = await product.find()
        let OrderDetails = await Order.find()
        // console.log(userDeatils ,  productDetails , OrderDetails)
        let UserArray = []
        let productArray = []
        let OrderArray = []

        let emptyObject = {}
        for(let key of userDeatils){
            // console.log(key)
            emptyObject.User_Id = key.user_id
            emptyObject.name = key.name
            emptyObject.city = key.city
            UserArray.push(emptyObject)
            emptyObject = {}
        }
        for(let key of productDetails){
            emptyObject.product_id = key.product_id
            emptyObject.name = key.name
            productArray.push(emptyObject)
            emptyObject = {}
        }
        for(let key of OrderDetails){
            emptyObject.date_of_purchase = key.date_of_purchase
            emptyObject.item_qty = key.item_qty
            OrderArray.push(emptyObject)
            emptyObject = {}
        }
        res.send({
            UserArray : UserArray ,
            productArray : productArray ,
            OrderArray : OrderArray
        })
    } catch (error) {
        res.json({status : "Failed to Get details " , message :  error.message})
    }
})

app.listen(PORT , console.log(`This server is running on ${PORT}`))