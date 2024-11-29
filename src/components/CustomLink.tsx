import { NavLink } from "react-router-dom";

export interface CustomLinkProps {
    name: string;
    to: string;
}

export const CustomLink: React.FC<CustomLinkProps> = ({ name, to }) => (<li> <NavLink to={to ?? "-"} activeClassName="nav-active" exact>{name ?? "-"}</NavLink> </li>);
export default CustomLink;