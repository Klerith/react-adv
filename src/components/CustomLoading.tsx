export interface CustomLoadingProps {
	message: string;
}

export const CustomLoading: React.FC<CustomLoadingProps> = ({ message }) => (<h1>{message ?? "-"}</h1>);
export default CustomLoading;