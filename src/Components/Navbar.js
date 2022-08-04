import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink className="" id="navlink" to="/">
        <h2 className="logo">Movie App |</h2>
      </NavLink>

      <ul>
        <NavLink
          className={(nav) => nav.isActive && "textColor"}
          id="navlink"
          to="/"
        >
          <li className="test">Home</li>
        </NavLink>
        <NavLink
          className={(nav) => nav.isActive && "textColor"}
          id="navlink"
          to="/search-movie"
        >
          <li>Search</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
