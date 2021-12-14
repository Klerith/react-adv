import { lazy, LazyExoticComponent } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface IRoute {
  path      : string;
  Component : LazyExoticComponent< JSXComponent > | JSXComponent;
  name      : string;
  children? : IRoute[];
}

// Nombrar las rutas para que sean más fáciles de leer en el NetWork
// const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */ "../01-lazyload/pages/LazyPage1"));
const LayoutPage = lazy(() => import(/* webpackChunkName: "LayoutPage" */ "../01-lazyload/layout/LayoutPage"));

export const routes: IRoute[] = [
  {
    path     : '/lazyload',
    Component: LayoutPage,
    name     : 'Lazy Layout Nested',
  },
  {
    path     : '/notlazy',
    Component: NoLazy,
    name     : 'Not Lazy',
  },
]