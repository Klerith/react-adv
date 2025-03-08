import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import logo from '../logo.svg'

import { routes } from './routes';
import { Suspense } from 'react';


export const Navigation = () => {
    return (
      <Suspense fallback={ null }>
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />
                    <ul>
                      {
                        routes.map(route =>(
                          <li key={ route.to }>
                              <NavLink 
                                to={ route.to } 
                                className={ ({ isActive }) => isActive ? 'nav-active' : '' }>
                                  { route.name }
                              </NavLink>
                          </li>
                        ))
                      }
                        
                    </ul>
                </nav>


                <Routes>
                    
                    {
                        routes.map(route =>(
                          <Route key={ route.to } path={route.path} element={ <route.Component/> } />
                    
                        ))
                      }
                    
                    <Route path="/*" element={ <Navigate to="/lazy1" replace /> } />
                </Routes>

            </div>
        </BrowserRouter>

      </Suspense>
    )
}
