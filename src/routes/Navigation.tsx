import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
  Navigate
} from 'react-router-dom';
import { routes } from './routes';
import logo from '../logo.svg';
import { Suspense } from 'react';

export const Navigation = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <div className="main-layout">
          <nav>
            <img src={ logo } alt="React Logo" />
            <ul>
              {
                routes.map( ({ to, name }) => (
                  <li key={ to }>
                    {/* <NavLink to={ to } activeClassName="nav-active" exact>{ name }</NavLink> */}
                    <NavLink to={ to } >{ name }</NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
            <Routes>
              { routes.map( ({ path, Component }) => (
                  <Route path={ path } element={ <Component /> } />
              )) }
              <Route path="/*" element={ <Navigate to={ routes[0].to } replace /> } />
            </Routes>
        </div>
      </Router>
    </Suspense>
  );
}
