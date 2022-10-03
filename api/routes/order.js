const router = require("express").Router();

const {verifyToken,verifyUser,verifyAdmin }=require("../utillities/verifyToken")
const {createOrder,updateOrder,deleteOrder,getAllOrders,getOneOrder}=require("../controllers/orders")

//  create a Product

router.post("/createorder", createOrder)

//UPDATE A Product INFORMATION

router.put("/updateorder/:id",verifyUser, updateOrder)

//DELETE A Product INFORMATION FROM DATABASE

router.delete("/deleteorder/:id",verifyUser, deleteOrder)

//  GET ALL Products INFORMATION FROM DATABASE

router.get("/getallorders",getAllOrders)


// //  GET SPecific  Product INFORMATION FROM DATABASE ON BASIS OF ID

router.get("/oneorder/:id", getOneOrder)




module.exports = router;


