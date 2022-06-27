import { Suspense } from 'react';
import {
     BrowserRouter as Router,
     Switch,
     Route,
     NavLink,
     Redirect
} from 'react-router-dom';

import logo from '../logo.svg';
import { routes } from './routes';

export const Navigation = () => {
     return (
          // Hay que especificar a react que es lo que le queremos mostrar mientras esta cargando el componente
          <Suspense fallback={<span>Loading</span>}>

               <Router>
                    <div className="main-layout">
                         <nav>
                              <img src={logo} alt="React Logo" />
                              <ul>
                                   {
                                        routes.map(({ path, name }) => (
                                             <li key={name}>
                                                  <NavLink
                                                       to={path}
                                                       activeClassName='nav-active'
                                                       exact
                                                  >
                                                       {name}
                                                  </NavLink>
                                             </li>
                                        ))
                                   }
                              </ul>
                         </nav>

                         {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                         <Switch>
                              {
                                   routes.map(({ path, Component }) => (
                                        <Route
                                             key={path}
                                             path={path}
                                             render={() => <Component />}
                                        />
                                   ))
                              }

                              <Redirect to={routes[0].path} />

                         </Switch>

                    </div>
               </Router>

          </Suspense>


     );
}