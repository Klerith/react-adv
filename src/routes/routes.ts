import { lazy,LazyExoticComponent } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface Route{
    path: string;
    to: string;
    Component: LazyExoticComponent<() => JSX.Element> |JSXComponent;
    name: string;
}

const LazyLayout = lazy(() => import(/*webpackChunkName: "LazyLayout"*/'../01-lazyload/layout/LazyLayout'));

export const routes: Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload/',
        Component : LazyLayout,
        name:'Lazy1-Layout',

    },
    {
        to: '/no-lazy',
        path: 'No-lazy',
        Component : NoLazy,
        name:'No Lazy',
    },
   
];