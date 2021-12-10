import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import { routes } from "../01-lazyload/router/routes";

import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <Suspense fallback={null}>
      <Router>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routes.map(({ path, name }) => (
                <li key={path}>
                  <NavLink to={path} activeClassName="nav-active" exact>
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Switch>
            {routes.map(({ path, component: Component }) => (
              <Route path={path} key={path} render={() => <Component />} />
            ))}
            <Redirect to={routes[0].path} />
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
};
