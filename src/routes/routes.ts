import { lazy, LazyExoticComponent } from 'react'
import { NoLazy } from '../01-lazy-load/pages/NoLazy'
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazy-load/pages'

type JSXComponent = () => JSX.Element

interface Route {
  to: string
  path: string
  Component: LazyExoticComponent<JSXComponent> | JSXComponent //es un jsxComponent con Lazy O común
  name: string
}

const LazyLayout = lazy(
  () =>
    import(
      /*webpackChunkName: "LazyPage1"*/ '../01-lazy-load/layout/LazyLayout'
    )
)

// const Lazy2 = lazy(
//   () =>
//     import(/*webpackChunkName: "LazyPage2"*/ '../01-lazy-load/pages/LazyPage2')
// )

// const Lazy3 = lazy(
//   () =>
//     import(/*webpackChunkName: "LazyPage3"*/ '../01-lazy-load/pages/LazyPage3')
// )

export const routes: Route[] = [
  {
    to: '/lazyload/',
    path: '/lazyload/*', // *  => todo dentro del path lazyload
    Component: LazyLayout,
    name: 'Lazy Layout',
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
    name: 'No Lazy',
  },
]
