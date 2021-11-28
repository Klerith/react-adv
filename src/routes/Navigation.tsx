import {Suspense} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages/';


import logo from '../logo.svg';
import { routes } from './routes';

export const Navigation = () => {
  return (
    <Suspense fallback={ <span>Loading...</span> } >
        <Router>
        <div className="main-layout">
          <nav>
              <img src={ logo } alt="React Logo" />
            <ul>
              {/* FIXME: */}
              {routes.map(({path, name}) => (
                  <li key={ path }>
                    <NavLink 
                    to={path} 
                    activeClassName="nav-active" 
                    exact
                    >
                      {name}
                    </NavLink>
                  </li>
                ))
              }
              
              {/* <li>
                <NavLink to="/lazy1" activeClassName="nav-active" exact>lazy1</NavLink>
              </li>
              <li>
                <NavLink to="/lazy2" activeClassName="nav-active" exact>lazy2</NavLink>
              </li>
              <li>
                <NavLink to="/lazy3" activeClassName="nav-active" exact>lazy3</NavLink>
              </li> */}
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            {
              routes.map(({ path, component: Component }) => (
                <Route 
                key={ path }
                path={path} 
                render={ () => <Component /> } />
                
              ))
              
            }
            <Redirect to={routes[0].path} />
            
            {/* <Route path="/lazy2">
              <LazyPage2 />
            </Route>
            <Route path="/lazy3">
              <LazyPage3/>
            </Route> */}
          </Switch>
        </div>
      </Router>
    </Suspense>
    
  );
}