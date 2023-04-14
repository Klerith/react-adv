import React from 'react'
import {Field, Form, Formik} from 'formik'
import formJson from '../data/custom-form.json'
import { MySelect, MyTextInput } from '../components'
import * as Yup from 'yup';

const initialValues: { [key:string] : any} = {}
const requiredFields: { [key:string] : any} = {}

for (const item of formJson) {
    Object.assign(initialValues, {[item.name]: item.value})
    
    if (!item.validations) { continue }
    let schema = Yup.string()
    for (const validation of item.validations) {
        if (validation.type === 'required') {
            schema = schema.required("Required")
        }
        if (validation.type === 'email') {
            schema = schema.email("Formato de email no valido")
        }
        if (validation.type === 'minLength') {
            schema = schema.min((validation as any).value, `Minimo ${(validation as any).value} caracteres`)
        }
    }
    requiredFields[item.name] = schema
}

const FormikDynamicFormPage = () => {
  return (
    <div>
        <h1> Formik Dynamic Form </h1>
        <Formik
            initialValues={initialValues}
            onSubmit={(values) =>{
                console.log({values})
            }}
            validationSchema={
                Yup.object({...requiredFields})
            }
        >
          {(formik)=>(
                <Form noValidate>
                    {
                        formJson.map( ({label, name, type, inputType, placeholder, options}) => {
                           
                            if (type == "input") {
                                return <MyTextInput 
                                            key={name}
                                            label={label} 
                                            name={name}
                                            placeholder={placeholder}
                                            type={inputType as 'text' | 'email' | 'password'}
                                        />
                                
                            }

                            if (type === 'select') {
                                return <MySelect
                                            key={name}
                                            name={name}
                                            label={label}
                                            placeholder={placeholder}
                                        >
                                            <option value={""}>Select a option</option>
                                            {
                                                
                                                options!.map( item =>(
                                                    <option key={item.id} value={item.id}>{item.label}</option>
                                                ))
                                            }
                                       </MySelect>
                            }

                            throw new Error(`Campo ${type} no soportado`);
                            
                           
                        })
                    }

                    <button type='submit' onClick={()=> formik.handleSubmit()}>Submit</button>
                </Form>
            )}
        </Formik>
    </div>
  )
}

export default FormikDynamicFormPage