import { NavLink } from "react-router-dom"
import { RouteData } from "../types/types"

export const Lix = (props: LixProps) =>
{
  const {path, to, name} = props.element

  return(
    <li key={path}>
      <NavLink 
        to={to}
         className={({isActive}) => isActive ? 'nav-active' : '' }>
          {name}
      </NavLink>
    </li>
  )


}


interface LixProps{
  element: RouteData
}