import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import { routes } from './routes';

import logo from '../logo.svg';
import { Suspense } from 'react';

export const Navigation = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Router>
        <div className="main-layout">
          <nav>
              <img src={ logo } alt="React Logo" />
            <ul>
              {
                routes.map(route => (
                  <li key={ route.path }>
                    <NavLink activeClassName='nav-active' to={ route.path }>{ route.name }</NavLink>
                  </li> 
                ))
              }
            </ul>
          </nav>

          {/* V5 */}
          <Switch>
            {
              routes.map(route => (
                <Route key={ route.path } path={ route.path }>
                  <route.Component />
                </Route>
              ))
            }
          </Switch>
        </div>
      </Router>
    </Suspense>

  );
}