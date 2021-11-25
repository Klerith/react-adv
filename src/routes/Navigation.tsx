import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from 'react-router-dom';
import { ShoppingPages } from '../02-components-patterns/pages/ShoppingPages';

import logo from '../logo.svg';

export const Navigation = () => {
  return (
  
    <Router>
 
      <div className="main-layout">
        <nav>
          <img src={ logo } alt="React Logo" />
          <ul>
            <li><NavLink to="/">Shopping</NavLink></li>
            <li><NavLink to="/about"  >About</NavLink></li>
            <li><NavLink to="/users"  >Users</NavLink></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={ <h1>About</h1> } />
          <Route path="/users" element={ <h1>Users</h1> } />
          <Route path="/" element={ <ShoppingPages /> } />
        </Routes>
      </div>

    </Router>
  );
}