import { FormikErrors, useFormik } from 'formik'
import React from 'react'
import '../styles/styles.css'

interface FormValues {
    firstName: string
    lastName: string
    email: string
}

const FormikBasicPage = () => {

 const validate = ({ firstName, lastName, email }:FormValues) => {

    const errors:FormikErrors<FormValues> = {}

    if (!firstName) {
        errors.firstName = 'El nombre is required'
    }else if(firstName.length < 3 ){
        errors.firstName = 'El nombre min length >=3'
    }
    if (!lastName) {
        errors.lastName = 'El apellido is required'
    }else if(lastName.length < 3 ){
        errors.lastName = 'El apellido min length >=3'
    }
    if (!email) {
        errors.email = 'El email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
 
    return errors
 }

  const { handleChange, values, handleSubmit, errors, touched, handleBlur } = useFormik({
    initialValues: {
        firstName: '',
        lastName: '',
        email: ''
    },
    onSubmit: (values) => {
        console.log({values})
    },
    validate: (values) => validate(values) 
  })


  return (
    <div>
        <h1>Formik Basic Tutorial</h1>
        <form noValidate onSubmit={handleSubmit}>
            <label htmlFor="firstName">Nombre</label>
            <input 
                onChange={ handleChange }
                value = { values.firstName }
                type="text" 
                name="firstName" 
                id="firtsName" 
                title='Nombre' 
                onBlur={handleBlur}
            />
            { touched.firstName && errors.firstName && <span>{errors.firstName}</span> }

            <label htmlFor="lastName">Apellido</label>
            <input 
                onChange={ handleChange }
                value = { values.lastName }
                type="text" 
                name="lastName" 
                id="lastName" 
                title='Apellido'
                onBlur={handleBlur}
            />
            { touched.lastName && errors.lastName && <span>{errors.lastName}</span> }

            <label htmlFor="email">Email</label>
            <input 
                onChange={ handleChange }
                value = { values.email }
                type="email" 
                name="email" 
                id="email" 
                title='Email'
                onBlur={handleBlur}
            />
            { touched.email && errors.email && <span>{errors.email}</span> }

            <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default FormikBasicPage