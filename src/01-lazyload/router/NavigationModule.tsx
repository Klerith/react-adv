import { Link, Redirect, Route, Switch, useRouteMatch } from "react-router-dom"
import LazyPage1 from "../pages/LazyPage1"
import LazyPage2 from "../pages/LazyPage2"
import LazyPage3 from "../pages/LazyPage3"

const NavigationModule = () => {

  const { path, url } = useRouteMatch()

  console.log({ path, url });

  return (
    <>
      <h2>Layout Page</h2> 
      <ul>
        <li>
          <Link to={`${url}/lazy1`}>Lazy 1</Link>
        </li>
        <li>
          <Link to={`${url}/lazy2`}>Lazy 2</Link>
        </li>
        <li>
          <Link to={`${url}/lazy3`}>Lazy 3</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/lazy1`}>
          <LazyPage1 />
        </Route>
        <Route path={`${path}/lazy2`}>
          <LazyPage2 />
        </Route>
        <Route path={`${path}/lazy3`}>
          <LazyPage3 />
        </Route>

        <Redirect to={`${path}/lazy1`} />
      </Switch>
    </>
  )
}

export default NavigationModule
