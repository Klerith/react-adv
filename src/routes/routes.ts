import { lazy, LazyExoticComponent} from "react";

type JSXComponent = ()=>JSX.Element;
interface Route{
  to:string,
  path:string,
  Component:JSXComponent | LazyExoticComponent<JSXComponent>,
  name:string,
  id:number
}
const Lazy1 = lazy(()=>import(/*webpackChunkName: "LazyPage1"*/ "../01-lazyload/pages/LazyPage1"));
const Lazy2 = lazy(()=>import(/*webpackChunkName: "LazyPage2"*/ "../01-lazyload/pages/LazyPage2"));
const Lazy3 = lazy(()=>import(/*webpackChunkName: "LazyPage3"*/ "../01-lazyload/pages/LazyPage3"));

export const routes: Route[]=[
  {
    to:"/lazy1",
    path:"lazy1",
    Component:Lazy1,
    name:"Lazy Page 1",
    id:1
  },
  {
    to:"/lazy2",
    path:"lazy2",
    Component:Lazy2,
    name:"Lazy Page 2",
    id:2
  },
  {
    to:"/lazy3",
    path:"lazy3",
    Component:Lazy3,
    name:"Lazy Page 3",
    id:3
  }
];