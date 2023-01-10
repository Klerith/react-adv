import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;
interface Routes {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayout = lazy(() => import("../01-layload/layout/LazyLayout"));
const Lazy1 = lazy(() => import("../01-layload/pages/LazyPage1"));
const Lazy2 = lazy(() => import("../01-layload/pages/LazyPage2"));

export const routes: Routes[] = [
  {
    to: "/lazyload/",
    path: "/lazyload/*",
    Component: LazyLayout,
    name: "Lazy-1",
  },
  { to: "/lazy2", path: "lazy2", Component: Lazy2, name: "Lazy-2" },
];
