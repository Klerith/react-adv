import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;
interface Routes {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const Lazy1 = lazy(() => import("../01-layload/pages/LazyPage1"));
const Lazy2 = lazy(() => import("../01-layload/pages/LazyPage2"));

export const routes: Routes[] = [
  { to: "/lazy1", path: "lazy1", Component: Lazy1, name: "Lazy-1" },
  { to: "/lazy2", path: "lazy2", Component: Lazy2, name: "Lazy-2" },
];
