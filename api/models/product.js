const mongoose = require('mongoose')
const { Schema } = mongoose

const productSchema = new Schema({

    title: {
        type: String,
        required: true,

    },
    desc: {
        type: String,
        required: true
    },
    cat: {
        type: String,
        required: true
    },
    img: {
        type: [String],
        required: true,
         
    }, 
    
    price: {
        type: Number,
        required: true,
    },

}, { timestamps: true })

const Product = mongoose.model("Product", productSchema)

module.exports = Product