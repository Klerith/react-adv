import { LazyExoticComponent } from "react"

// esto es para disminuir y para ser mas simple a la hora de explicar estos tipados
type TSXComponent = () => JSX.Element
//esto es el tipo o forma que tienen mis rutas
export interface RouteData {
    to: string
    path: string
    name: string
    Component: LazyExoticComponent<TSXComponent> | TSXComponent
}