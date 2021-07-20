import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <Link to='/'>
        <div>Home</div>
      </Link>
      <Link to='/characters'>
        <div>Characters</div>
      </Link>
      <Link to='/episodes'>
        <div>Episodes</div>
      </Link>
    </div>
  );
}

export default NavBar;
