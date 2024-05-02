import "../styles/styles.css";
import { useForm } from "../hooks/useForm";
const initForm = {
  name: "",
  email: "",
  password1: "",
  password2: "",
};
const formValidations: {} = {
  email: [
    (value?: string | readonly string[] | undefined) => {
      return value && value.includes("@");
    },
    "El correo debe de tener una @",
  ],
  password1: [
    (value?: string | readonly string[] | undefined) =>
      value && value.length >= 6,
    "El password debe de tener más de 6 letras.",
  ],
  password2: [
    (value?: string | readonly string[] | undefined) =>
      value && value.length >= 6,
    "El password debe de tener más de 6 letras.",
  ],
  name: [
    (value?: string | readonly string[] | undefined) =>
      value && value.length >= 1,
    "El nombre es obligatorio.",
  ],
};
export const RegisterPage = () => {
  const { onChange, onSubmit, name, email, password1, password2 } = useForm(
    initForm,
    formValidations
  );
  return (
    <div className="form">
      <h1 className="title"> Formulario de registro</h1>
      <hr />
      <form noValidate onSubmit={onSubmit}>
        <div className="input-container ic1">
          <input
            type="text"
            name="name"
            id="name"
            className="input"
            placeholder=" "
            value={name}
            onChange={onChange}
          />
          <div className="cut"></div>
          <label htmlFor="name" className="placeholder">
            Nombre Completo
          </label>
        </div>
        <div className="input-container ic2">
          <input
            type="email"
            name="email"
            id="email"
            placeholder=" "
            className="input"
            value={email}
            onChange={onChange}
          />
          <div className="cut"></div>
          <label htmlFor="email" className="placeholder">
            Correo Electrónico
          </label>
        </div>
        <div className="input-container ic2">
          <input
            type="password"
            name="password1"
            id="password1"
            placeholder=" "
            className="input"
            value={password1}
            onChange={onChange}
          />
          <div className="cut"></div>
          <label htmlFor="password1" className="placeholder">
            Contraseña
          </label>
        </div>
        <div className="input-container ic2">
          <input
            type="password"
            name="password2"
            placeholder=" "
            className="input"
            value={password2}
            onChange={onChange}
          />
          <div className="cut"></div>
          <label htmlFor="password1" className="placeholder">
            Repetir Contraseña
          </label>
        </div>
        <button type="submit" className="submit">
          Enviar Datos
        </button>
      </form>
    </div>
  );
};
