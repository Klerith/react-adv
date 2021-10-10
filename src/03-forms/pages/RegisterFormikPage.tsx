import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

import '../styles/styles.css';

export const RegisterFormikPage = () => {
    
    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: '',
                }}
                onSubmit={ (values) => {
                    console.log(values)
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                                    .min(2, 'El nombre debe de ser de 3 caracteres o mas')
                                    .max(15, 'El nombre debe de ser menor de 15 caracteres')
                                    .required('Requerido'),
                        email: Yup.string()
                                    .email('Revise el formato del correo')
                                    .required('Requerido'),
                        password1: Yup.string()
                                        .min( 6, 'Mínimo 6 letras' )
                                        .required('Requerido'),
                        password2: Yup.string()
                                        .oneOf([ Yup.ref('password1') ], 'Las contraseñas no son iguales')
                                        .required('Requerido')
                    })
                }
            >
                { ({ handleReset }) => (
                    <Form>
                        <MyTextInput 
                            label="Nombre"
                            name="name"
                            placeholder="Fernando"
                        />

                        <MyTextInput 
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="john@google.com"
                        />

                        <MyTextInput 
                            label="Password"
                            name="password1"
                            type="password"
                            placeholder="******"
                        />

                        <MyTextInput 
                            label="Confirm password"
                            name="password2"
                            type="password"
                            placeholder="******"
                        />


                        <button type="submit">Create</button>
                        
                        <button type="button" onClick={ handleReset }>Reset Form</button>
                    </Form>
                )}
                

            </Formik>



        </div>
    )
}
