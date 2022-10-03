const mongoose=require("mongoose")
const {Schema}=  mongoose

const userSchema=new Schema({
    username:{
        type:String,
        require:true
    },  
     email:{
        type:String,
        require:true,
        unique:true
    }, 
     password:{
        type:String,
        require:true,
   
    },  
      isAdmin:{
        type:Boolean,
        default:false,
   
    },

},{timestamps:true})

const Users=mongoose.model("User",userSchema)
module.exports=Users