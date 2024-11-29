import { BrowserRouter as Router } from 'react-router-dom';
import NavComponent, { IRoute } from './NavComponent';
import SwitchComponent from './SwitchComponents';
import { Suspense } from 'react';
import CustomLoading from './CustomLoading';

export interface RouterProps {
	routes: IRoute[];
}

export const CustomRouter: React.FC<RouterProps> = ({ routes }) => {
    return (
    <Suspense fallback={<CustomLoading message='Loading...' />}>
        <Router>
            <div className="main-layout">
                <NavComponent routes={routes} />
                <SwitchComponent routes={routes} />
            </div>
        </Router>
    </Suspense>);
}

export default CustomRouter;
