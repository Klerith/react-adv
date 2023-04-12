import '../styles/styles.css'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup' 
import { MyTextInput } from '../components/MyTextInput';

type DataForm = {
    name: string
    email: string
    password1: string
    password2: string
}


const RegisterFormikPage = () => {

  return (
    <div>
        <h1>Register Formik Page</h1>
        <Formik
            initialValues={{
                name: '',
                email: '',
                password1: '',
                password2: ''
            }}
            onSubmit={ ( values ) => {
                console.log( values )
            }}
            onReset={ ()=> console.log('reset') }
            validationSchema={Yup.object({
                    name: Yup.string()
                                    .required('Requerido')
                                    .min(3, 'Debe de tener 3 o mas caracteres')
                                    .max(15, 'Debe de tener 15 caracteres o menos'),
                    email: Yup.string()
                                 .required('Requerido')
                                .email('El correo no tiene un formato válido'),
                    password1: Yup.string()
                                .required()
                                .min(6, 'Minimo 6 caracteres'),
                    password2: Yup.string()
                                .required()
                                .min(6, 'Minimo 6 caracteres' )
                                .oneOf([Yup.ref('password1')], 'Los password deben ser iguales')
                })
            }
        >

            {
                (formik) => (
                    <Form>
                         <label htmlFor="name">Name</label>
                         <Field name="name" type="text" />
                        <ErrorMessage name="name" component="span" />
                        <label htmlFor="email">Email</label>
                        <Field name="email" type="text" />
                        <ErrorMessage name="email" component="span" />
                        <label htmlFor="password1">Password</label>
                         <Field name="password1" type="password" />
                        <ErrorMessage name="password1" component="span" />
                       < MyTextInput 
                            label='password2'
                            name='password2'
                            type='password'
                       />
                        <button type="submit"> Create </button>
                        <button type="button" onClick={ formik.handleReset }> Reset </button>
                    </Form>
                )
            }
        </Formik>

    </div>
        
  )
}

export default RegisterFormikPage