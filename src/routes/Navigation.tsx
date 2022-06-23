import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import logo from '../logo.svg';
import { Lix } from './Components/Lix';
import { RouteData, routes } from './routes';

const RS = ({path, Component} : RouteData) =>  (<Route key={path} path={path} element={<Component/>}/>)

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            {routes.map(R => <Lix element={R} /> )}
          </ul>
        </nav>

          <Routes>
              {routes.map((route) =>  RS(route))}
              <Route path="/" element={<>Home Page</>}/>
              <Route path="/*" element={<>404 Not Found</>}/>
          </Routes>

      </div>
    </BrowserRouter>
  );
}