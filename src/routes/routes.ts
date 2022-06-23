import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

export interface RouteData {
    to: string
    path: string
    name: string
    Component: () => JSX.Element
}

export const routes: RouteData[] = [
    {to: '/lazy1', path:'lazy1', Component: LazyPage1, name: 'Page 1' },
    {to: '/lazy2', path:'lazy2', Component: LazyPage2, name: 'Page 2' },
    {to: '/lazy3', path:'lazy3', Component: LazyPage3, name: 'Page 3' },
]
