import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazy-load/pages'
import { routes } from './routes'

import logo from '../logo.svg'

export const Navigation = () => {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <div className='main-layout'>
          <nav>
            <img src={logo} alt='React Logo' />
            <ul>
              {routes.map(({ to, name }) => (
                <li key={name}>
                  <NavLink
                    to={to}
                    className={({ isActive }) => (isActive ? 'nav-active' : '')}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {/* {<Route path='lazy1' element={<LazyPage1 />} />
          <Route path='lazy2' element={<LazyPage2 />} />
          <Route path='lazy3' element={<LazyPage3 />} />}
           */}
            {routes.map(({ path, to, Component }) => (
              <Route key={to} path={path} element={<Component />} />
            ))}
            <Route path='/*' element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  )
}
