import React from 'react'
// import CheckBox from './CheckBox'
import Input from './Input'
// import RadioButton from './RadioButton'
import Select from './Select'
import Textarea from './Textarea'

const FormControl = (props) => {
    const { control, ...rest } = props
    
    switch (control) {
        case "input":
            return <Input {...rest} />
        case "textarea":
            return <Textarea {...rest} />
        case "select":
            return <Select {...rest}/> 
        // case "radio":
        //     return <RadioButton {...rest}/>  
        // case "checkbox":
        //     return <CheckBox {...rest}/>    
            default:
               return null
    }
    }

    export default FormControl