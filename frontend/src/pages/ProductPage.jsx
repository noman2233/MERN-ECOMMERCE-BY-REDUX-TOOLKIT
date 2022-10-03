import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import  {useDispatch, useSelector} from  "react-redux"
import { addProduct } from '../ReduxToolkit/features/cartSlice'

const ProductPage = () => {

const dispatch=useDispatch()

const product = useSelector((state) => state.cart.quantity)
console.log(product)
  const { id } = useParams("")


  const [Indexdata, setIndexdata] = useState([])
// console.log(Indexdata)


  useEffect(() => {
    
  const getData = async () => {
    const res = await fetch(`/products/oneproduct/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json()

    if (res.status !== 200) {
      console.log("no data present")
    } else {
   
      setIndexdata(data)
    }
  }

    getData()
  }, [id])


  const addtocart=()=>{dispatch(addProduct(Indexdata))}
  // console.log(addProduct)



  return (
    <div>
      <section className="text-gray-600 body-font font-abc overflow-hidden">
        <div className="container px-5 py-16 mx-auto">
          <div className="lg:w-4/5 mx-auto flex align-middle justify-center flex-wrap">
            <img alt="ecommerce" className="lg:w-1/3 w-[230px]  object-contain lg:h-96 md:h-76   rounded" src={Indexdata.oneProduct?.img} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font font-semibold text-gray-500 my-2 tracking-widest">{Indexdata.oneProduct?.cat}</h2>
              <h1 className="text-gray-900 text-3xl my-4 title-font font-bold mb-1">{Indexdata.oneProduct?.title}</h1>

              <p className="leading-relaxed">{Indexdata.oneProduct?.desc}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">

                <div className="flex ml-6 items-center">


                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">$&nbsp;{Indexdata.oneProduct?.price}</span>
                <button className=" cart flex ml-4 text-white bg-indigo-500 border-0  py-2 px-4 focus:outline-none lg:w-32 hover:bg-indigo-600 rounded md:w-4  md:px-6 text-sm" onClick={addtocart}>Add to cart</button>
                <Link to="/cart">
                <button className=" cart flex ml-4 text-white bg-indigo-500 border-0  py-2 px-4 focus:outline-none lg:w-32 hover:bg-indigo-600 rounded md:w-4  md:px-6 text-sm">Order page
                </button>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default ProductPage