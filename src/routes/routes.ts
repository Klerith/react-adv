import { lazy } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";
import { RouteData } from "./types/types";
//import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";


// Aqui inicio con la configuracion del lazy load
// OJO: Importante para agregar un elemento y usar la funcion lazy. el componente debe de estar importado por defecto
const Layout = lazy(() => import(/* webpackChunkName: "layout" */ '../01-lazyload/layout/LazyLayout'))
//Ojo: cuando se coloca el path como en /layout/* indica que al entrar alli se va a encontrar un pack diferente para las rutas de alli
export const routes: RouteData[] = [
    {to: '/lazyload/', path:'/lazyload/*', Component: Layout, name: 'layout ' },
    {to: '/noLazy', path:'NoLazy', Component: NoLazy, name: 'noLazy || dashboard' },
]
