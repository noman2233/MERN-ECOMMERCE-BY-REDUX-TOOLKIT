import React from 'react'
import TextError from './TextError'
import {Field,ErrorMessage} from "formik"


const CheckBox = (props) => {
    const { label, name, options, ...rest } = props
    return (
        <div>
            <label htmlFor="">{label}</label>
            <Field  name={name} >
                {({ field }) => {
                    return (
                        options.map(option => {
                          return  <React.Fragment key={option.value}>

                                {/* <input type="checkbox" value={option.value} id={option.value} {...field} {...rest} checked={field.value.include(option.value)} /> */}
                                <input
                  type='checkbox'
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
                                <label htmlFor={option.value}>{option.key}</label>


                            </React.Fragment>
                        })
                    )
                }}
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default CheckBox