const mongoose=require("mongoose")
const {Schema}=  mongoose

const cartSchema=new Schema({
    userId:{
        type:String,
        require:true
    },  
     products:[
        {
            productid:{
                type:String,

            },
            quantity:{

                
                type:Number,
                default:1
                
            
            }
        }
     ]

},{timestamps:true})

const Cart=mongoose.model("Cart",cartSchema)
module.exports=Cart