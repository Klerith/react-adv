import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
//import { LazyPage1 } from "../01-lazyload/pages";


type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component:  LazyExoticComponent<JSXComponent> | JSXComponent ;
    name: string;
}

//definir Lazyload
const LazyLayout = lazy(() => import(/*webpackChunkName: "LazyLayout" */'../01-lazyload/layout/LazyLayout'))


export const routes: Route[] = [
    { 
        path:'/lazyload/*',
        to: '/lazyload/',
        Component: LazyLayout,
        name:'LazyLayout - Dash'
    },
    {
        to: '/no-lazy',
        path:'no-Lazy',
        Component: NoLazy,
        name:'No Lazy'
    },
    
];