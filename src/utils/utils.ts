export interface IRoute {
	path: string;
	name: string;
	Component: React.FC<any>;
	to: string;
	children?: IRoute[];
}