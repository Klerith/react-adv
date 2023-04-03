import { useRef } from 'react'
import { useForm } from '../hooks/useForm'
import '../styles/styles.css'

type DataForm = {
    name: string
    email: string
    password1: string
    password2: string
}


const RegisterPage = () => {

  const { formData: { name, email, password1, password2 }, onChange, onSubmit, reset, isValidEmail } = useForm<DataForm>({
    name: '',
    email: '',
    password1: '',
    password2: ''
  })

  const nameFocus = useRef(false)
  const emailFocus = useRef(false)
  const password1Focus = useRef(false)
  const password2Focus = useRef(false)

  return (
    <div>
        <h1>RegisterPage</h1>
        <form noValidate onSubmit={(e) => onSubmit(e)}>
            <input 
              onFocus={() => { 
                nameFocus.current = true
              }}
              className={ nameFocus.current && name.trim().length <= 3  ? 'has-error' : ''} 
              type="text" name="name" 
              id="name" 
              placeholder='Name' 
              value={name} 
              onChange={(e) => onChange(e)} />
            { nameFocus.current && name.trim().length <= 0 && <span>Este campo es necesario</span>}
            <input 
              onFocus={() => { 
                emailFocus.current = true
              }}
              className= {emailFocus.current && (!isValidEmail(email.trim()) ||  email.trim().length <= 0 ) ? 'has-error' : ''}
              type="email" 
              name="email" 
              id="email" 
              placeholder='Email' 
              value={email} 
              onChange={(e) => onChange(e)} />
                { emailFocus.current && !isValidEmail(email.trim()) && <span>El formato de email no es correcto</span>}
            <input 
              onFocus={() => { 
                  password1Focus.current = true
                }}
              className= { password1Focus.current && (password1.trim().length < 6) ? 'has-error' : ''}
              type="password" 
              name="password1" 
              id="password1" 
              placeholder='Password' 
              value={password1} 
              onChange={(e) => onChange(e)}/>
            { password1Focus.current && password1.trim().length < 6 && <span>Minimo 6 caracteres</span>}
            <input
                onFocus={() => { 
                  password2Focus.current = true
                }}
                className= { password2Focus.current && (password2.trim() !== password1.trim()) ? 'has-error' : ''}
              type="password" 
              name="password2" 
              id="password2" 
              placeholder='Repeat password' 
              value={password2} 
              onChange={(e) => onChange(e)} />
               { password2Focus.current && password2.trim() !== password1.trim() && <span>Las dos contraseñas deben ser iguales</span>}
            <button type="submit"> Create </button>
            <button type="button" onClick={reset}> Reset </button>
        </form>
    </div>
        
  )
}

export default RegisterPage