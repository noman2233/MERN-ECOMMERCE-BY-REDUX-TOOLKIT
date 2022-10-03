import React from 'react'
import {Field,ErrorMessage} from "formik"
import TextError from "./TextError"

const Textarea = (props) => {
    const {label,name,...rest}=props
  return (
    <>
    <div  className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out  '>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest}   />
    </div>
      <ErrorMessage name={name} component={TextError}/>
    </>
  )
}

export default Textarea