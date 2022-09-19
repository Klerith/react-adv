import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import ShoppingPage from "../components-patten/pages/ShoppingPage";

import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/">Shopping</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<div> about</div>}></Route>
          <Route path="/users" element={<div> Users</div>}></Route>
          <Route path="/" element={<ShoppingPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
