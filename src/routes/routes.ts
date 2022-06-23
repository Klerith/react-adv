import { lazy } from "react";
import { RouteData } from "./types/types";
//import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";


// Aqui inicio con la configuracion del lazy load
// OJO: Importante para agregar un elemento y usar la funcion lazy. el componente debe de estar importado por defecto
const Lazy1 = lazy(() => import(/* webpackChunkName: "lazyPageN1" */ '../01-lazyload/pages/LazyPage1'))
const Lazy2 = lazy(() => import(/* webpackChunkName: "lazyPageN2" */ '../01-lazyload/pages/LazyPage2'))
const Lazy3 = lazy(() => import(/* webpackChunkName: "lazyPageN3" */ '../01-lazyload/pages/LazyPage3'))

export const routes: RouteData[] = [
    {to: '/lazy1', path:'lazy1', Component: Lazy1, name: 'Page 1' },
    {to: '/lazy2', path:'lazy2', Component: Lazy2, name: 'Page 2' },
    {to: '/lazy3', path:'lazy3', Component: Lazy3, name: 'Page 3' },
]
