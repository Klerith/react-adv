//Components:
import { CustomRouter } from '../components/CustomRouter';
//Utils:
import { IRoute } from '../utils/utils';
export interface NavigationProps {
	routes: IRoute[];
}

export const Navigation: React.FC<NavigationProps> = ({ routes }) => (<CustomRouter routes={routes} />);
export default Navigation;