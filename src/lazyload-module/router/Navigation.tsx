import { Link, Redirect, Route, Switch, useRouteMatch, BrowserRouter as Router } from "react-router-dom";
import { User, Users } from "../pages";

export const Navigation: React.FC = () => {
    const { path, url } = useRouteMatch();
    const userID: string = '123123';
    return (
        <Router>
            <h2>Lazylayout - pages:</h2>
            <ul>
                <li>
                    <Link to={`${url}/users/${userID}`}>User ID + {userID}</Link>
                </li>
                <li>
                    <Link to={`${url}`}>Users</Link>
                </li>
            </ul>
            <Switch>
                <Route path={`${path}/users/:id`} exact>
                    <User id={userID} />
                </Route>
                <Route path={`${path}/`} exact>
                    <Users />
                </Route>
                <Redirect to={`${path}/` } />
            </Switch>
        </Router>
    );
}

export default Navigation;
