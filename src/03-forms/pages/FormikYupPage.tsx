import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import '../styles/styles.css'



const FormikYupPage = () => {

 
  const { 
    handleSubmit, errors, 
    touched, getFieldProps
} = useFormik({
    initialValues: {
        firstName: '',
        lastName: '',
        email: ''
    },
    onSubmit: (values) => {
        console.log({values})
    },
    validationSchema: Yup.object({
        firstName: Yup.string().required('El nombre es requerido').min(3, 'Minimo 3 caracteres'),
        lastName: Yup.string().required('El apellido es requerido').min(3, 'Minimo 3 caracteres'),
        email: Yup.string().required('El nombre es requerido').email('Debe de ser un email valido')
    }) 
  })


  return (
    <div>
        <h1>Formik Yup Tutorial</h1>
        <form noValidate onSubmit={handleSubmit}>
            <label htmlFor="firstName">Nombre</label>
            <input 
                {...getFieldProps('firstName')}
                type="text" 
                id="firtsName" 
                title='Nombre' 
            />
            { touched.firstName && errors.firstName && <span>{errors.firstName}</span> }

            <label htmlFor="lastName">Apellido</label>
            <input 
                {...getFieldProps('lastName')}
                type="text" 
                id="lastName" 
                title='Apellido'            
            />
            { touched.lastName && errors.lastName && <span>{errors.lastName}</span> }

            <label htmlFor="email">Email</label>
            <input 
                {...getFieldProps('email')}
                type="email" 
                id="email" 
                title='Email'
            />
            { touched.email && errors.email && <span>{errors.email}</span> }

            <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default FormikYupPage