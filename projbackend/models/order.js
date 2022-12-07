const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema;

const productCartSchema = new mongoose.Schema({
    product:{
        type: ObjectId,
        ref: "Product"
    },
    quantity: Number,
    name: String,
    price: Number
},{timestamps:true});

const ProductCart = mongoose.model("ProductCart",productCartSchema);

const orderSchema = new mongoose.Schema({
// products inside the cart in real world site
    products: [productCartSchema],
    transaction_id: {},
    amount: {type: Number},
    address: {type: String, maxlength: 60},
    updated: Date,
    user:{
        type: ObjectId,
        ref: "User"
    }

},{timestamps: true});

const Order = mongoose.model("Order",orderSchema);

module.exports ={ProductCart, Order};