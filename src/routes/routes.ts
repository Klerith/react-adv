import { LazyExoticComponent, lazy } from "react";

const lazyHome = lazy(() =>  import(/*  webpackChunkName: "LazyHome" */"../02-component-patterns/pages/Home"));
const lazyAbout = lazy(() => import(/*  webpackChunkName: "LazyAbout" */"../02-component-patterns/pages/About"));
const lazyUsers = lazy(() => import(/*  webpackChunkName: "LazyUsers" */"../02-component-patterns/pages/Users"));

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: JSXComponent | LazyExoticComponent<JSXComponent>;
  name: string;
}

export const routes: Route[] = [
  {
    to: "/home",
    path: "home",
    Component: lazyHome,
    name: "Home",
  },
  {
    to: "/about",
    path: "about",
    Component: lazyAbout,
    name: "About",
  },
  {
    to: "/users",
    path: "users",
    Component: lazyUsers,
    name: "Users",
  },
];
