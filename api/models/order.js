const mongoose = require("mongoose")
const { Schema } = mongoose

const orderSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },

    city: {
        type: String,
        require: true,

    },

    products: [
        {
            quantity: {
                type: Number,
                default: 1
            },
            productId: {
                type: String
            }
        }
    ]

    ,
    address: {
        type: String,
        required:true

    },
    total: {
        type: Number,
        default: 0,

    },

    status: {
        type: String,
        default: "pending",

    },

}, { timestamps: true })

const Orders = mongoose.model("Order", orderSchema)
module.exports = Orders