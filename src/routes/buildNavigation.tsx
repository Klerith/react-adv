import { NavLink} from "react-router-dom";

export const BuildNavigation = ({route}:any) => {
  const {to,name} = route;
  return (
    <li>
      <NavLink
        to={to}
        className={({isActive})=> isActive ? "nav-active" : "" }
      >
        {name}
      </NavLink>
    </li>
  )
};