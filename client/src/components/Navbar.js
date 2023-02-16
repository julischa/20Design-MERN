import React from "react";

const Navbar = () => {
  return (
    <nav className="header my-5">
      <div className="container">
        <div className="nav-menu mx-auto my-5">
          <span className="navbar-link-text"></span>
          <a href="/" className="navbar-link nav-link">
            <span className="navbar-link-text">Create</span>
          </a>
          <div className="navbar-search">
            <input type="text" placeholder="Search" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
