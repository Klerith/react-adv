import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { LazyPage1, LazyPage2 } from "../pages";

const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout</h1>
      <ul>
        <li>
          <NavLink to={"lazy1"}>Lazy 1</NavLink>
        </li>
        <li>
          <NavLink to={"lazy2"}>Lazy 2</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="lazy1" element={<LazyPage1 />} />
        <Route path="lazy2" element={<LazyPage2 />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  );
};

export default LazyLayout;
