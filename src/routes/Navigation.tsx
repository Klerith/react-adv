import { Suspense } from 'react';
import { Navigate, NavLink, Routes, Route, BrowserRouter } from 'react-router-dom';

import { routes } from './routes';

import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {
                routes.map(({ to, name }) => (
                  <li key={to}>
                    <NavLink to={to} className={({ isActive }) => isActive ? "nav-active" : ""}>
                      {name}
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>

          <div className='page-layout'>
            <Routes>
              {
                routes.map(({ path, Component }) => (
                  <Route key={path} path={path} element={<Component />} />
                ))
              }
              <Route path="/*" element={<Navigate to="/home" replace />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}