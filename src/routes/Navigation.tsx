import { BrowserRouter } from "react-router-dom";
import { Route,Routes,NavLink,Navigate } from "react-router-dom";
import logo from '../logo.svg';
export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="react-logo"></img>
            <ul>
              <li>
                <NavLink
                  to="/home"
                  className={({isActive})=> isActive ? "nav-active" : "" }
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({isActive})=> isActive ? "nav-active" : "" }>ABOUT</NavLink>
              </li>
              <li>
                <NavLink to="/users" className={({isActive})=> isActive ? "nav-active" : "" }>USERS</NavLink>
              </li>
            </ul>
        </nav>
        <Routes>
          <Route path="about" element={<h1>hola desde about</h1>}/>
          <Route path="users" element={<h1>Hola desde users</h1>}/>
          <Route path="home" element={<h1>Hola desde home</h1>}/>
          <Route path="/*" element={<Navigate to="/home" replace/>}/>
        </Routes>
      </div>
     </BrowserRouter>
  )
}
