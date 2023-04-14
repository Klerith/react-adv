import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import logo from '../logo.svg';
import RegisterPage from '../03-forms/pages/RegisterPage';
import FormikBasicPage from '../03-forms/pages/FormikBasicPage';
import FormikYupPage from '../03-forms/pages/FormikYupPage';
import FormikComponentPage from '../03-forms/pages/FormikComponentPage';
import FormikAbstractionPage from '../03-forms/pages/FormikAbstractionPage';
import RegisterFormikPage from '../03-forms/pages/RegisterFormikPage';
import FormikDynamicFormPage  from '../03-forms/pages/FormikDynamicForm';




export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/" activeClassName="nav-active" exact>Home</NavLink>
            </li>
            
            <li>
              <NavLink to="/register" activeClassName="nav-active" exact>Register Page</NavLink>
            </li>
            <li>
              <NavLink to="/register-formik" activeClassName="nav-active" exact>Register Formik Page</NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" activeClassName="nav-active" exact>Formik Basic</NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" activeClassName="nav-active" exact>Formik Yup</NavLink>
            </li>
            <li>
              <NavLink to="/formik-component" activeClassName="nav-active" exact>Formik Component</NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstraction" activeClassName="nav-active" exact>Formik Abstraction</NavLink>
            </li>
            <li>
              <NavLink to="/formik-dynamic" activeClassName="nav-active" exact>Formik Dynamic</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="nav-active" exact>About</NavLink>
            </li>
            <li>
              <NavLink to="/users" activeClassName="nav-active" exact>Users</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/register-formik">
            <RegisterFormikPage />
          </Route>
          <Route path="/formik-basic">
            <FormikBasicPage />
          </Route>
          <Route path="/formik-yup">
            <FormikYupPage />
          </Route>
          <Route path="/formik-component">
            <FormikComponentPage />
          </Route>
          <Route path="/formik-abstraction">
            <FormikAbstractionPage />
          </Route>
          <Route path="/formik-dynamic">
            <FormikDynamicFormPage />
          </Route>
          <Route path="/about">
            <h1>About</h1>
          </Route>
          <Route path="/users">
            <h1>Users</h1>
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}