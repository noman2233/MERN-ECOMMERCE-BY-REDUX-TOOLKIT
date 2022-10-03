const router = require("express").Router();

const {verifyToken,verifyUser,verifyAdmin }=require("../utillities/verifyToken")
const {createCart,updateCart,deleteCart,getAllCarts,getOnecart}=require("../controllers/cart")

//  create a Product

router.post("/createcart", createCart)

//UPDATE A Product INFORMATION

router.put("/updatecart/:id",verifyUser, updateCart)

//DELETE A Product INFORMATION FROM DATABASE

router.delete("/deletecart/:id",verifyUser, deleteCart)

//  GET ALL Products INFORMATION FROM DATABASE

router.get("/getallcarts",getAllCarts)


// //  GET SPecific  Product INFORMATION FROM DATABASE ON BASIS OF ID

router.get("/onecart/:id",verifyUser, getOnecart)




module.exports = router;


