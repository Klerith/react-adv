import { LazyExoticComponent } from "react";

import ShoppingPage from "../02-components-patterns/pages/ShoppingPage";

type JSXComponent = () => JSX.Element;
interface Routes {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

export const routes: Routes[] = [
  {
    to: "shoppingPage",
    path: "/shoppingPage",
    Component: ShoppingPage,
    name: "Lazy-1",
  },
];
