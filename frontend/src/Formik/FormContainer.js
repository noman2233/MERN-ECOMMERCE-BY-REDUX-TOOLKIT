import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from "yup"
import FormControl from './FormControl'



const FormContainer = () => {
const dropdownoptions=[
  {key:"select option", value:""},
  {key:"Option 1", value:"option1"},
  {key:"Option 2", value:"option2"},
  {key:"Option 3", value:"option3"}
]
const radioButtons=[

  {key:"Option 1", value:"roption1"},
  {key:"Option 2", value:"roption2"},
  {key:"Option 3", value:"roption3"}
]

const checkboxButtons=[

  {key:"Option 1", value:"cOption1"},
  {key:"Option 2", value:"cOption2"},
  {key:"Option 3", value:"cOption3"}
]
  const initialValues = ({
    email: "",
    description: "",
    selectOptions: "",
    radioButtons:"",
    checkButtons:""
  })
  const validationSchema = Yup.object({
    email: Yup.string().email("invalid email ").required("required"),
    description: Yup.string().required("required"),
    selectOptions: Yup.string().required("required"),
    radioButtons: Yup.string().required("required"),
    checkButtons: Yup.array().required("required"),
  })
  const onSubmit = (values) => { console.log(values) }

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {
        (formik) => <Form>

          <FormControl control="input" name="email" label="Email" />
          <FormControl control="textarea" name="description" label="Description" />
          <FormControl control="select" name="selectOptions" label="Select a option" options={dropdownoptions} />
          <FormControl control="radio" name="radioButtons" label="select a button" options={radioButtons} />
        <FormControl control="checkbox" name="checkButtons" label="select one or more" options={checkboxButtons} />

          <button type="submit">Submit</button>
        </Form>
      }

    </Formik>
  )
}

export default FormContainer