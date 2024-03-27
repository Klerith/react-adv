import { NavLink, Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import logo from '../logo.svg';
import { LazyPageOne, LazyPageTwo, LazyPageThree } from '../01-lazy-load/pages';
export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/lazy1" className={({ isActive }) => isActive ? "nav-active" : ""} >Lazy1</NavLink>
            </li>
            <li>
              <NavLink to="/lazy2" className={({ isActive }) => isActive ? "nav-active" : ""} >Lazy2</NavLink>
            </li>
            <li>
              <NavLink to="/lazy3" className={({ isActive }) => isActive ? "nav-active" : ""} >Lazy3</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="lazy1" element={<LazyPageOne />} />
          <Route path="lazy2" element={<LazyPageTwo />} />
          <Route path="lazy3" element={<LazyPageThree />} />

          <Route path="/*" element={<Navigate to={"/lazy1"} replace />} />
        </Routes>
      </div>
    </BrowserRouter >
  );
}