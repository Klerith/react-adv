// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-Lazyload/pages";
import { LazyExoticComponent } from "react";
import { lazy } from "react"

type JSXComponent = () => JSX.Element

interface Route {
     path: string,
     Component: LazyExoticComponent<() => JSX.Element> | JSXComponent,
     name: string,
     children?: Route[]
}

const LazyPage1 = lazy(() => import( /* webpackChunkName: "LazyPage1" */'../01-Lazyload/pages/LazyPage1'));
const LazyPage2 = lazy(() => import( /* webpackChunkName: "LazyPage2" */'../01-Lazyload/pages/LazyPage2'));
const LazyPage3 = lazy(() => import( /* webpackChunkName: "LazyPage3" */'../01-Lazyload/pages/LazyPage3'));

export const routes: Route[] = [
     {
          path: '/lazy1',
          Component: LazyPage1,
          name: 'LazyPage-1'
     },
     {
          path: '/lazy2',
          Component: LazyPage2,
          name: 'LazyPage-2'
     },
     {
          path: '/lazy3',
          Component: LazyPage3,
          name: 'LazyPage-3'
     },

]