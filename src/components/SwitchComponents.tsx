import { Route, Switch } from "react-router-dom";
import { NavProps } from "./NavComponent";

export type SwitchProps = Pick<NavProps, "routes">;

export const SwitchComponent: React.FC<SwitchProps> = ({ routes }) =>
	(<Switch>
		{routes && routes.map(({ path, name, Component }) => (<Route key={name} path={path ?? "-"} exact> <Component /> </Route>))}
	</Switch>);
	
export default SwitchComponent;