const Order =require("../models/Order")


const createOrder=async(req,res)=>{
    try {
        
        let order=await new Order(req.body)
        savedOrder=await order.save()
        res.status(200).json(savedOrder)

    } catch (error) {
        res.status(500).json({status:"internal server error",messagee:error.message})
    }
}


//UPDATE A product CONTROLLER

const updateOrder = async (req, res, next) => {
    try {
      
  
      let updateOrder= await Order.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
  
      res.status(200).json({ status: "Order updated successfully", updateOrder });
    } catch (error) {
      next(error);
    }
  };


//DELETE A order INFORMATION FROM DATABASE- CONTROLLER

const deleteOrder = async (req, res, next) => {
    try {
      let deleteOrder = await Order.findByIdAndDelete(req.params.id);
  
      res.status(200).send({ status: "Order deleted successfully", deleteOrder });
    } catch (error) {
      next(error);
    }
  };


 
  
  // /GET ALL PRODUCTS
 const getAllOrders =async (req, res,next) => {
    try {
        let allOrders = await Order.find()
        res.status(200).send({ status: "All Orders are here", allOrders });
      } catch (error) {
        next(error);
      }
    };
  




  const getOneOrder = async (req, res, next) => {
    try {
      let oneOrder = await Order.findById(req.params.id);
      res.status(200).send({ status: "All users are here", oneOrder });
    } catch (error) {
      next(error);
    }
  };



module.exports={createOrder,updateOrder,deleteOrder,getOneOrder,getAllOrders}