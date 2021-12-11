import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { LazyPageOne, LazyPageTwo, LazyPageThree } from "../lazyload/pages";

import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink
                to="/lazy-page-one"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazy-page-two"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazy-page-three"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="lazy-page-one" element={<LazyPageOne />} />
          <Route path="lazy-page-two" element={<LazyPageTwo />} />
          <Route path="lazy-page-three" element={<LazyPageThree />} />

          <Route path="/*" element={<Navigate to="/lazy-page-one" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
