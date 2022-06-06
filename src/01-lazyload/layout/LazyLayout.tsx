import React from 'react'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import {LazyPage1,LazyPage2,LazyPage3 } from '../pages';
export const LazyLayout = () => {
  return (
    <div>
        <h1>
            LazyLayout Page
            </h1>
            <ul>
                <li>
                    <NavLink to="lazylayout1">Lazy1</NavLink>
                </li>
                <li>
                    <NavLink to="lazylayout2">Lazy2</NavLink>
                </li>
                <li>
                    <NavLink to="lazylayout3">Lazy3</NavLink>
                </li>
            </ul>
            <Routes>
                <Route path="lazylayout1" element={<LazyPage1 />} />
                <Route path="lazylayout2" element={<LazyPage2 />} />
                <Route path="lazylayout3" element={<LazyPage3 />} />
                <Route path="*" element={<Navigate replace to="lazylayout1" />} />
            </Routes>
            { /*Rutas hijas aqui */}
    </div>
   
  )
}

export default LazyLayout;
