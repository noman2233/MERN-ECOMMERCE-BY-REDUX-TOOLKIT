import React from 'react'
import { Link } from 'react-router-dom'

const Banner1 = () => {
  return (
    <div className='flex flex-wrap my-10 bg-slate-200 h-[350px] justify-around' >
      <div className="info lg:m-auto sm:m-auto md:m-auto">
        <div className="div ">
          <h1 className='font-bold text-4xl my-5 text-center'>Limited time offer</h1>
        </div>  <div className="div">
          <h1 className='font-medium text-sm lg:auto sm:auto md:h-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, voluptates!</h1>
        </div>
      </div>
      <div className="picture flex space-x-2 m-auto">
        <div className="button flex align-middle justify-center m-auto mr-10">

   <Link to="/shop">
    <button className="flex m-auto mb-20 text-white mt-[50px] align-middle bg-indigo-500 border-0 h-[40px] px-2 focus:outline-none hover:bg-indigo-600 rounded text-lg">Shop Now</button>
   </Link>  
        </div>
        <img src='/img/offer.png' alt="" className='w-[139px] mr-[40px]  object-contain h-[130px] my-2 sm:w-[180px] lg:w-[220px] lg:h-auto flex align-middle justify-center' />
      </div>

    </div>
  )
}

export default Banner1