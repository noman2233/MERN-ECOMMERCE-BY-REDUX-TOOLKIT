import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link, useParams } from "react-router-dom";
import Badge from "@mui/material/Badge";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../ReduxToolkit/features/cartSlice";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [counter, setCounter] = useState(1);

  const dispatch = useDispatch()

  const product = useSelector((state) => state.cart.quantity)
  console.log(product)
  const { id } = useParams("")

  // IMPORTANT POINT
  const cart = useSelector((state) => state.cart)
console.log(cart)
//   const [Indexdata, setIndexdata] = useState([])
// console.log(Indexdata)


  // useEffect(() => {
    
  // const getData = async () => {
  //   const res = await fetch(`/products/oneproduct/${id}`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   })
  //   const data = await res.json()

  //   if (res.status !== 200) {
  //     console.log("no data present")
  //   } else {
   
  //     setIndexdata(data)
  //   }
  // }

  //   getData()
  // }, [id])

  

  const counterNumber = (type) => {
    if (type === "inc") {
      setCounter((prev) => prev + 1);
    } else {
      counter > 1 && setCounter((prev) => prev - 1);
    }
  };


  const remove = () => {
    dispatch(removeProduct(product))
  }


  return (
    <div className="Navbar h-[70px] my-6 mt-[20px] sticky top-0 bg-white z-999  md:my-6 sm:my-6 lg:my-6 flex align-middle justify-around">
      <div className="logo flex">
        <Link to="/">
          <h1 className="logo w-[100px] flex sm:w-[130px] md:w-[150px] lg:w-[200px]">
      
            <h2 className="font-bold text-2xl">E-SHOP</h2>
          </h1>
        </Link>
      </div>
      <ul className="navbarul flex ">
        <Link to="/">
          <li className="cursor-pointer mx-2 lg:mx-4 font-semibold text-sm md:text-base lg:text-lg">
            Home
          </li>
        </Link>
        <Link to="/shop">
          <li className="cursor-pointer mx-2 lg:mx-4 font-semibold text-sm md:text-base lg:text-lg">
            Shop
          </li>
        </Link>
        <Link to="/about">
          <li className="cursor-pointer mx-2 lg:mx-4 font-semibold text-sm md:text-base lg:text-lg">
            About
          </li>
        </Link>
      </ul>
      <div>
        <Link to="/login">  <button className="flex mx-auto text-white bg-black border-0 py-2 px-4 focus:outline-none hover:bg-white hover:text-black hover:border-2 hover:font-semibold rounded text-sm">Login</button></Link>

      </div>
      <div className="shoppig-icon">
        <Badge color="secondary" badgeContent={product}>
          <ShoppingBagOutlinedIcon onClick={() => setOpen(true)} />
        </Badge>
      </div>

      <Transition.Root show={open} as={Fragment}>
<Dialog as="div" className="relative z-32" onClose={setOpen}>
  <Transition.Child
    as={Fragment}
    enter="ease-in-out duration-500"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="ease-in-out duration-500"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
  </Transition.Child>

  <div className="fixed inset-0 overflow-hidden">
    <div className="absolute inset-0 overflow-hidden">
      <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
        <Transition.Child
          as={Fragment}
          enter="transform transition ease-in-out duration-500 sm:duration-700"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition ease-in-out duration-500 sm:duration-700"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
            <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
              <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                <div className="flex items-start justify-between">
                  <Dialog.Title className="text-lg font-medium text-gray-900">
                    {" "}
                    Shopping cart
                  
                  </Dialog.Title>
                  <div className="ml-3 flex h-7 items-center">
                    <button
                      type="button"
                      className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close panel</span>
                      <CloseIcon


                      />
                    </button>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flow-root">
                    <ul className="-my-6 divide-y divide-gray-200">
                      {cart.products?.map((item) => (
                        <li className="flex py-6" >
                          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img
                              src=""
                              alt="Ecommerce"
                              className="h-full w-full object-cover object-center"
                            />
                          </div>

                          <div className="ml-4 flex flex-1 flex-col">
                            <div>
                              <div className="flex justify-between text-base font-medium text-gray-900">
                                <h3>product price</h3>
                                <p className="my-4">500</p>
                             
                              </div>
                               <p className="mt-1 text-sm my-2 text-gray-500">
                                Quantity
                              </p>
                              <div className="flex space-x-2">

                              <div
                                className="font-bold  bg-black text-white flex align-middle justify-center rounded-md cursor-pointer w-[20px] "
                                onClick={() => counterNumber("inc")}
                                >
                                +
                              </div>
                              <div>{counter}</div>
                              <div
                                className="font-bold bg-black text-white flex align-middle justify-center rounded-md cursor-pointer w-[20px] "
                                onClick={() => counterNumber("dec")}
                                >
                                -
                              </div>
                                </div>
                            </div>
                            <div className="flex flex-1 items-end justify-between text-sm">
                              <p className="text-gray-500"></p>

                              <div className="flex">
                                <button

                                  type="button"
                                  onClick={remove}
                                  className="font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>


                       ))}   
                    </ul>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>$262.00</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">
                  Shipping and taxes calculated at checkout.
                </p>
                <div className="mt-6">
                  <Link
                    to="/"
                    className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  >
                    Checkout
                  </Link>
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                  <p>
                    or{" "}
                    <button
                      type="button"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                      onClick={() => setOpen(true)}
                    >
                      Continue Shopping
                      <span aria-hidden="true"> &rarr;</span>
                    </button>
                  </p>
                </div>
              </div>
              a{" "}
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </div>
    </div>
  </div>
</Dialog>
</Transition.Root> 
    
    </div> 
  );
};

export default Navbar;
