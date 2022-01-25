import { Suspense } from 'react';
import {
  Route,
  NavLink,
  Routes,
  BrowserRouter,
  Navigate
} from 'react-router-dom';
import logo from '../logo.svg';
import { routes } from './routes';


export const Navigation = () => {

  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {
                routes.map(({ to, name }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      className={({ isActive }) => isActive ? 'nav-active' : ''}>
                      {name}
                    </NavLink>
                  </li>
                ))

              }
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            {
              routes.map(({ path, Component }) => (
                <Route
                  key={path}
                  path={path}
                  element={<Component />}
                />
              ))
            }
            <Route path="/*" element={<Navigate to={routes[0].to} replace></Navigate>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}