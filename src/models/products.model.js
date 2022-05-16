const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productName:{type:String,required:true,trim:true},
    categoryName:{type:String,required:true,trim:true},
    unitPrice:{type:Number,required:true,trim:true},
    quantity:{type:Number,required:true,trim:true},
});

const Product = mongoose.model('Product',ProductSchema);
module.exports = Product;