import {
  Routes,
  Route,
  NavLink,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import { routes } from "./routes";

import logo from "../logo.svg";
import { Suspense } from "react";

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {/*TODO: crear navlinks dinámicos (map)*/}
              {routes.map(({ to, name }) => {
                return (
                  <li key={to}>
                    <NavLink
                      to={to}
                      className={({ isActive }) =>
                        isActive ? "nav-active" : ""
                      }
                    >
                      {name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            {routes.map(({ path, Component, to }) => {
              return <Route key={to} path={path} element={<Component />} />;
            })}

            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
