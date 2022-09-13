import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages'

import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/lazy1" activeClassName="nav-active" exact>Lazy 1</NavLink>
            </li>
            <li>
              <NavLink to="/lazy2" activeClassName="nav-active" exact>Lazy 2</NavLink>
            </li>
            <li>
              <NavLink to="/lazy3" activeClassName="nav-active" exact>Lazy 3</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/lazy1">
            <LazyPage1 />
          </Route>
          <Route path="/lazy2">
            <LazyPage2 />
          </Route>
          <Route path="/lazy3">
            <LazyPage3 />
          </Route>
          <Route path="/*" >
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
