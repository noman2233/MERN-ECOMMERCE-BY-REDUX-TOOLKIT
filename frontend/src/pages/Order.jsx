

import React, { useEffect, useState } from 'react'
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Order = () => {

  const cart = useSelector((state) => state.cart)
  console.log(cart)
  const quantity = useSelector((state) => state.cart.quantity)
  
  // const total = useSelector((state) => state.cart.total)
// console.log(total)
// console.log(cart)
  // const id  = useParams("")
  // console.log(id)
  const [counter, setCounter] = useState(1);
  const counterNumber = (type) => {
    if (type === "inc") {
      setCounter((prev) => prev + 1);
    } else {
      counter > 1 && setCounter((prev) => prev - 1);
    }
  };

  return (
    <>
      <h1 className='font-bold text-xl text-center my-5'>CART PAGE</h1>

        <div className='flex justify-around flex-wrap  my-5 space-x-2'>
        <div className='flex flex-col shadow-md p-2'>

      {cart.products.map((item)=>(
          <div className="Product_info flex align-middle m-auto space-x-2 ">

            <div className="product_image my-auto" key={item._id}>
              <img src={item.img} alt="" className='w-16 h-16 ' />
            </div>
            <div className="details">
              <h1 className='font-bold text-lg m-3'>{item.title}</h1>
            
            </div>
            <div className="price my-auto ">
              <h1 className='font-bold text-2xl  cursor-pointer'>$ {item.price}</h1>
            </div>
            <div className="ince_dec flex align-middle justify-center space-x-2 mr-5">
              <div className="dec font-extrabold text-3xl  my-auto"      onClick={() => counterNumber("dec")}>-</div>
              <h1 className='font-bold text-2xl my-auto'> {counter} </h1>
              <div className="inc font-extrabold text-3xl my-auto cursor-pointer"      onClick={() => counterNumber("inc")}>+</div>
            </div>

            <hr />
          </div>
            ))}
        
        
        </div>

        <div className=" sideCart  ml-1 text-white bg-blue-400 p-10 ">

          <h1 className="text-center text-black font-extrabold">Product Quantity is: </h1>

          <div className="text-white text-center font-bold my-2">{cart.products.length<1 ?"Cart is empty": quantity }</div>


          <ul  >
            <div className="items flex  align-middle items-center ">


              {/* <h1 className="text-black my-3 font-bold">Product Quantity {quantity}</h1> */}
              {/* <div className="flex justify-center mx-20">

                <div className="text-black mr-1 bg-white w-5 h-6 font-bold text-center flex items-center justify-center rounded-full ">+</div>

                <div className="text-black font-bold  "> 1</div>
                <div className="text-black ml-2 bg-white w-5 h-6 font-bold text-center flex items-center  justify-center rounded-full  ">-</div>
              </div> */}
            </div>
            {/* <h1 className="text-black my-3 font-bold">$ 30</h1> */}

          </ul>
          <div className="bton flex justify-center align-middle">
            <Link to="/checkout">
              <button className=" cart flex ml-4 text-white bg-black border-0  py-2 px-4  focus:outline-none lg:w-32 hover:bg-indigo-600 rounded md:w-4  md:px-6 text-sm">Checkout Now</button>
            </Link>
          </div>

        </div>


      </div>
    </>
  )
}

export default Order