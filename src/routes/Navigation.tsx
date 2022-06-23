import { Suspense } from 'react';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import { Loading } from '../components/loading/Loading';
import logo from '../logo.svg';
import { Lix } from './Components/Lix';
import { routes } from './routes';
import { RouteData } from './types/types';

const RS = ({path, Component} : RouteData) =>  (<Route key={path} path={path} element={<Component/>}/>)

export const Navigation = () => {
  // el Suspense es para indicarle a react que debe de esperar, mientras lo haces has otra cosa... (un componete de carga o loading)
  return (
    <Suspense fallback={<Loading />}>
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
    </Suspense>
  );
}