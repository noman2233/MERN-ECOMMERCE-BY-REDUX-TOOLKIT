const Product =require("../models/product")


const createProduct=async(req,res,next)=>{
    try {
        
        let product=await new Product(req.body)
        savedProduct=await product.save()
        res.status(200).json(savedProduct)

    } catch (error) {
        next(error)
    }
}


//UPDATE A product CONTROLLER

const updateProduct = async (req, res, next) => {
    try {
      
  
      let updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
  
      res.status(200).json({ status: "product updated successfully", updatedProduct });
    } catch (error) {
      next(error);
    }
  };


//DELETE A User INFORMATION FROM DATABASE- CONTROLLER

const deleteProduct = async (req, res, next) => {
    try {
      let deletedUser = await Product.findByIdAndDelete(req.params.id);
  
      res.status(200).send({ status: "User deleted successfully", deletedUser });
    } catch (error) {
      next(error);
    }
  };


 
  
  // /GET ALL PRODUCTS

  
 const getAllProducts =async (req, res,next) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
      let products;
  
      if (qNew) {
        products = await Product.find().sort({ createdAt: -1 }).limit(6);
      } else if (qCategory) {
        products = await Product.find({
          cat: {
            $in: [qCategory],
          },
        });
      } else {
        products = await Product.find();
      }
  
      res.status(200).json(products);
    } catch (err) {
      next(err)
    }
  };
  

  const getOneProduct=async(req,res,next)=>{
    try {
      const {id}=req.params
  
      let oneProduct = await Product.findById(req.params.id);
      res.status(200).send({ status: "Specific products is here", oneProduct });
    } catch (error) {
        next(error);
    
  }
}

module.exports={createProduct,updateProduct,deleteProduct,getAllProducts,getOneProduct}