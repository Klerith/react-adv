import  { LazyExoticComponent } from 'react';
import { lazy } from "react";


// import { LazyPage1, LazyPage2, LazyPage3} from '../01-lazyload/pages';


type JSXComponent = () => JSX.Element;

interface Route {
    path: string;
    component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string;
    children?: Route[];
}

const LazyPage1 = lazy(() => import( /* webpackChunkName: "LazyPage1" */  '../01-lazyload/pages/LazyPage1'));
const LazyPage2 = lazy(() => import( /* webpackChunkName: "LazyPage2" */  '../01-lazyload/pages/LazyPage2'));
const LazyPage3 = lazy(() => import( /* webpackChunkName: "LazyPage3" */  '../01-lazyload/pages/LazyPage3'));


export const routes: Route[] = [
    {
        path: '/lazy',
        component: LazyPage1,
        name: 'LazyPage-1'
    },
    {
        path: '/lazy2',
        component: LazyPage2,
        name: 'LazyPage-2'
    },
    {
        path: '/lazy3',
        component: LazyPage3,
        name: 'LazyPage-3'
    },
];