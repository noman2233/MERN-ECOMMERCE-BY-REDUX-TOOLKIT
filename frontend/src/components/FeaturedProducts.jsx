import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { publicRequest } from '../reqMethod';



const FeaturedProducts = ({products}) => {
  const [product, setProduct] = useState([]);
 
  useEffect(() => {
    
  const getProducts=async()=>{
  const res = await publicRequest.get("/products/getallproducts");
  setProduct(res.data.slice(1,5));
  
  }
  getProducts()
  
  }, [])
  return (<>
        <h3 className='font-bold text-xl my-4 text-center'>Featured Products</h3>     
      <div className='flex align-middle justify-center flex-wrap'>
           {product.map((item,index)=>{
                return(
                    <div className=' single_product_container my-5' key={index._id}>
                     <div className="  flex-wrap mb-4 w-[260px] mx-5  p-2  flex  flex-col cursor-pointer shadow-md">
                <Link to={`/productpage/${item._id}`}  className=" h-48 flex align-middle justify-center rounded overflow-hidden">
                  <img alt="ecommerce" className="w-40 flex align-middle justify-center md:justify-center object-contain z-[-1]" src={item.img} />
                </Link>
                <div className="mt-4 ">
                 
                  <h2 className="text-gray-900 text-center title-font text-lg font-medium">{item.title} </h2>
                  <p className="mt-1 text-center">${item.price}</p>
               
                  {/* <button  className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Add to cart</button> */}

                </div>
              </div>

                    </div>
                  
                  )
                })} 
        
    </div>
    <Link to="/shop">   <button  className="flex mx-auto my-5 text-white bg-black border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">View All</button></Link>
            </>
  )
}

export default FeaturedProducts