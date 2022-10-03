import React from 'react'
import { Formik, Form } from "formik"
import * as Yup from 'yup'
import FormControl from './FormControl'

const LoginForm = () => {
const initialValues = {
        email: "",
        password: "",
    }
const validationSchema=Yup.object({
    email:Yup.string().email("invalid email").required("Required"),
    password:Yup.string().required("Required")
})

const onSubmit=(values)=>console.log(values)
    return (
        <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmit}>
            {formik => {
                return <Form>
                    <FormControl control="input" name="email" label="Email"  />
                    <FormControl control="input" name="password" label="Password"  />
                    <button type="submit" disabled={!formik.isValid}>Submit</button>
                </Form>
            }}
        </Formik>
    )
}

export default LoginForm