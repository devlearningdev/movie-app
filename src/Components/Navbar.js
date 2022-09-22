import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isActive, setIsactive] = React.useState(true);

  function toggle() {
    setIsactive((previousValue) => !previousValue);
  }

  return (
    <div className="navbar">
      <NavLink className="" id="navlink" to="/">
        <img
          src="https://i.ibb.co/0BkfXdV/newlogo.png"
          width="60px"
          height="60px"
          className="logo"
        ></img>
      </NavLink>

      <ul>
        <NavLink
          className={(nav) => nav.isActive && "textColor"}
          id="navlink"
          to="/"
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          className={(nav) => nav.isActive && "textColor"}
          id="navlink"
          to="/search-movie"
        >
          <li>Search</li>
        </NavLink>
        <NavLink
          className={(nav) => nav.isActive && "textColor"}
          id="navlink"
          to="/favorite-movies"
        >
          {" "}
          <li>
            <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon>
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
