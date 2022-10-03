import React from 'react'
import { Link } from "react-router-dom"

import { addProduct } from '../redux/features/cartSlice'
import { useDispatch } from 'react-redux'


const OrignalShop = ({currentPage}) => {
    console.log(currentPage)

    const dispatch=useDispatch()



    
const handleProduct=(product)=>{
    dispatch(addProduct(product))
  }
  
  return (
    <div>

    <section className="text-gray-600 body-font ">
      <h1 className='text-center font-bold my-5 text-[23px]'> All Products</h1>
      <div className="container px-5 py-24 mx-auto">


        <div className="flex flex-wrap align-middle justify-center -m-4">
          {currentPage.map((item) => (




            <div className="lg:w-60 md:w-1/4 mb-4 mx-8  p-2 w-full flex  flex-col cursor-pointer shadow-md" key={item._id}>
              <Link to="/productpage" className=" relative h-48 flex align-middle justify-center rounded overflow-hidden">
                <img alt="ecommerce" className="w-40 flex align-middle justify-center md:justify-center object-contain z-[-1]" src={item.img} />
              </Link>
              <div className="mt-4 ">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.category}</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">{item.title.slice(1,20)}... </h2>
                <p className="mt-1">${item.price}</p>
                <p className="mt-1">{item.size}</p>
                <button onClick={handleProduct} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Add to cart</button>

              </div>
            </div>



          ))}
        </div>
      </div>

    </section>
  </div>
  )
}

export default OrignalShop