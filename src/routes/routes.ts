import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface IRoute {
  path      : string;
  Component : LazyExoticComponent< JSXComponent > | JSXComponent;
  name      : string;
  children? : IRoute[];
}

// Nombrar las rutas para que sean más fáciles de leer en el NetWork
const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */ "../01-lazyload/pages/LazyPage1"));
const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */ "../01-lazyload/pages/LazyPage2"));
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */ "../01-lazyload/pages/LazyPage3"));


export const routes: IRoute[] = [
  {
    path     : '/lazy1',
    Component: Lazy1,
    name     : 'Lazy Page 1',
  },
  {
    path     : '/lazy2',
    Component: Lazy2,
    name     : 'Lazy Page 2',
  },
  {
    path     : '/lazy3',
    Component: Lazy3,
    name     : 'Lazy Page 3',
  },
]