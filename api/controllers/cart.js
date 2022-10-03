const Cart =require("../models/cart")
const Product =require("../models/product")


// const createCart=async(req,res,next)=>{
//   try {
    
//       const {id}=req.params
//       const cart=await Product.findOne({id:id})
// res.status(200).json({status:"product added to cart",cart})

//   } catch (error) {
//     next(error)
//   }
// }


const createCart=async(req,res,next)=>{
    try {
        
        let cart=await new Cart(req.body)
        savedCart=await cart.save()
        res.status(200).json(savedCart)

    } catch (error) {
        next(error)
    }
}


//UPDATE A product CONTROLLER

const updateCart = async (req, res, next) => {
    try {
      
  
      let updateCart= await Cart.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
  
      res.status(200).json({ status: "CART updated successfully", updateCart });
    } catch (error) {
      next(error);
    }
  };


//DELETE A User INFORMATION FROM DATABASE- CONTROLLER

const deleteCart = async (req, res, next) => {
    try {
      let deleteCart = await Cart.findByIdAndDelete(req.params.id);
  
      res.status(200).send({ status: "Cart deleted successfully", deleteCart });
    } catch (error) {
      next(error);
    }
  };


 
  
  // /GET ALL PRODUCTS
 const getAllCarts =async (req, res,next) => {
    try {
        let allCarts = await Cart.find()
        res.status(200).send({ status: "All Carts are here", allCarts });
      } catch (error) {
        next(error);
      }
    };
  




  const getOnecart = async (req, res, next) => {
    try {
      let oneCart = await Cart.findById(req.params.id);
      res.status(200).send({ status: "One prodcut added to cart", oneCart });
    } catch (error) {
      next(error);
    }
  };



module.exports={createCart,updateCart,deleteCart,getOnecart,getAllCarts}