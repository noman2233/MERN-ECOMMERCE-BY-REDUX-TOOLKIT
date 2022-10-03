const mongoose=require("mongoose")
const env=require("dotenv")
env.config()

main().catch(err=>console.log(err))

 async function main(){
  await  mongoose.connect(process.env.MONGO_URL)
  console.log("Connected to database")
}


module.exports=main