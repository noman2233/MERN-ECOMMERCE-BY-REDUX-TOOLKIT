import React from 'react'
import { Formik, Form } from "formik"
import * as Yup from 'yup'
import FormControl from './FormControl'

const RegistrationForm = () => {
const options=[
    {key:"mail ", value:"mailmoc"},
    {key:"telephone", value:"telephonemoc"}
]

const initialValues={
    name:"",
    email:"",
    password:"",
    cpassword:"",
    modeOfContact:"",
    phone:""
 
}

const onSubmit=values=>console.log(values)



const validationSchema=Yup.object({
    name:Yup.string().required('Required'),
    email:Yup.string().email("invalid email").required("Required"),
    password:Yup.string().required("Required"),
    cpassword:Yup.string().oneOf([Yup.ref("password"),""],'Passwords does not match').required("Required"),
    modeOfContact:Yup.string().required("Required"),
    phone:Yup.string().when('modeOfContact',{
        is:"telephonemoc",then:Yup.string().required("Required")
    })




})
  return (
    <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmit}>
        {formik=>{
            return <Form>
          
                <FormControl control="input" type="text" name="name" label="Name"    />
                <FormControl control="input" type="email" name="email" label="Email"    />
       
                <FormControl control="input" type="password" name="password" label="Password"    />
                <FormControl control="input"type="password" name="cpassword" label="Confirm Password"    />
                <FormControl control="radio"  name="modeOfContact" label="Select Any One" options={options}   />
                <FormControl control="input" type="text" name="phone" label="Phone Number"    />
                <button type="submit" disabled={!formik.isValid}>Submit</button>
            </Form>
        }}
    </Formik>
  )
}

export default RegistrationForm