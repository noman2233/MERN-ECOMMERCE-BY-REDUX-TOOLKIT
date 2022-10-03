import React, { useEffect, useState } from 'react'
import { Formik, Form } from "formik"
import * as Yup from 'yup'
import FormControl from '../Formik/FormControl'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const CheckoutPage = () => {
 const cart=useSelector((state)=>state.cart)
 console.log(cart)

  const [stripeToken, setStripeToken] = useState(null)
  const navigate=useNavigate()

const onToken=(token)=>{
  setStripeToken(token)
}



  
  useEffect(() => {

    const makeReq = async () => {
      try {
        const res = await axios.post("http://localhost:80/api/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        })
        navigate.push("/success", { data: res.data })
      } catch (error) {
        console.log(error)
      }
    }
    makeReq()

  }, [stripeToken, cart.total, navigate])




  const initialValues = {
    name: "",
    email: "",
    state: "",
    address: "",
    phone: "",
    pincode:"",

  }

  const onSubmit = values => console.log(values)



  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    email: Yup.string().email("invalid email").required("Required"),
    address: Yup.string().required("Required"),
    pincode: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
 
  })
  return(
    <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmit} className = "mainContainer font-abc" >
      { formik=> {
  return <Form>


    <div className='m-auto font-bold text-center my-4 from-stone-700 text-2xl'>
      CheckoutPage
    </div>
    <div className='m-auto font-bold lg:w-1/2 text-center  my-5 from-stone-700 text-1xl'>
      Delivery Details
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap align-middle justify-center -m-2">
        <div className="p-2 w-1/2">
          <div className="control">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <FormControl control="input" type="text" name="name" id="name" className="outline-none" />
          </div>
        </div>
        <div className="p-2 w-1/2">

        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Email</label>

            <FormControl control="input" type="email"   name="email" id="name" className="outline-none " />
        
        </div>
      </div>
      <div className="p-2 w-full">
        <div className="">
          <label htmlFor="message" className="leading-7 text-sm text-gray-600">Address</label>

          <FormControl control="textarea" type="text" name="address" id="address" className="outline-none" />
        </div>
      </div>
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">City</label>
            <FormControl control="input" type="city" name="city" id="name" className="outline-none" />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Phone</label>
            <FormControl control="input" type="text" name="pincode" id="name" className="outline-none" col="20" row="4" />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">State</label>
            <FormControl control="input" type="text" name="state" id="state" className="outline-none" />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">PinCode</label>
    
            <FormControl control="input" type="text" name="pincode" id="pincode" className="outline-none" />
          </div>
        </div>
      </div>

<StripeCheckout
name="E-commerce Shop"
image="/img/logo.png"
billingAddress
shippingAddress
description={`Your amount is ${cart.total}`}
token={onToken}
stripeKey='pk_test_51LXaccJcpjqSoL4IIvWQCpgwEGgJc9hVEGZg5nJ0rS3c5qvmOtHCmx83kfmJaitighCrYTNAXSWZSV50yDWufLw8006ST6eI65'
> 
<div className='flex justify-center align-middle'>

 <button className="flex justify-center bg-blue-900 mt-6 mb-3 mr-2 w-52 ml-2 font-bold p-2 text-white ">PAY NOW </button>
</div>
</StripeCheckout>
    </div></Form>
}}
    </Formik >
  )
}


export default CheckoutPage

