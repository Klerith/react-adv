import { lazy,LazyExoticComponent } from 'react';

type JSXComponent = () => JSX.Element;

interface Route{
    path: string;
    to: string;
    Component: LazyExoticComponent<() => JSX.Element> |JSXComponent;
    name: string;
}

const Lazy1 = lazy(() => import(/*webpackChunkName: "LazyPage1"*/'../01-lazyload/pages/LazyPage1'));
const Lazy2 = lazy(() => import(/*webpackChunkName: "LazyPage2"*/'../01-lazyload/pages/LazyPage2'));
const Lazy3 = lazy(() => import(/*webpackChunkName: "LazyPage3"*/'../01-lazyload/pages/LazyPage3'));

export const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        Component : Lazy1,
        name:'LazyPage1',

    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component : Lazy2,
        name:'LazyPage2',
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component : Lazy3,
        name:'LazyPage3',
        
    }
];