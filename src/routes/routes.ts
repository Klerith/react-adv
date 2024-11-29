//Components"
import { lazy } from "react";
import { About, Home } from "../pages";
//Utils:
import { IRoute } from "../utils/utils";

const LazyloadLayout = lazy(() => import(/* webpackChunckName:"LazyloadLayout" */'../lazyload-module/layout/LazyloadLayout'));

export const routes: IRoute[] = [
	{
		path: '/',
		name: 'Home',
		Component: Home,
		to: '',
	},
	{
		path: '/about',
		name: 'About',
		Component: About,
		to: 'about',
	},
    {
        path: '/lazyload',
        name: 'Lazy Load',
        Component: LazyloadLayout,
		to: 'lazyload',
    }
];