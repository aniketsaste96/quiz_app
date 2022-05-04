import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand" href="#">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/card" className="nav-link" href="#">
                card
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/createquestions" className="nav-link" href="#">
                Create
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/updatequestion" className="nav-link" href="#">
                Edit
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/pratice" className="nav-link" href="#">
                Practice
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
