import { lazy, LazyExoticComponent } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface IRoute {
  to        : string;
  path      : string;
  Component : LazyExoticComponent< JSXComponent > | JSXComponent;
  name      : string;
}

// Nombrar las rutas para que sean más fáciles de leer en el NetWork
const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */ "../01-lazyload/layout/Layout"));


export const routes: IRoute[] = [
  {
    to       : '/lazyload/',
    path     : '/lazyload/*',
    Component: LazyLayout,
    name     : 'LazyLayout',
  },
  {
    to       : '/no-lazy',
    path     : 'no-lazy',
    Component: NoLazy,
    name     : 'No Lazy Page',
  },
]