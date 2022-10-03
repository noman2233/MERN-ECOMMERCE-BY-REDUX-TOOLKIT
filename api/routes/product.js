const router = require("express").Router();

const {verifyToken,verifyUser,verifyAdmin }=require("../utillities/verifyToken")
const {createProduct,updateProduct,deleteProduct,getAllProducts,getOneProduct}=require("../controllers/products")

//  create a product

router.post("/createproduct", createProduct)

//UPDATE A product INFORMATION

router.put("/updateproduct/:id",verifyUser, updateProduct)

//DELETE A product INFORMATION FROM DATABASE

router.delete("/deleteproduct/:id",verifyUser, deleteProduct)

//  GET ALL products INFORMATION FROM DATABASE

router.get("/getallproducts",getAllProducts)


// //  GET SPecific  product INFORMATION FROM DATABASE ON BASIS OF ID

router.get("/oneproduct/:id", getOneProduct)




module.exports = router;


