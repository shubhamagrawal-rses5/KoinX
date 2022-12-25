import React from "react";
import "../components/Navbar.css";
function Navbar() {
  return (
    <header className="">
      <nav className="navbar bg-body-light fixed-top header">
        <div className="container-fluid">
          <div className="nav-logo">
            <img className="nav-logo-image" src="icon.png" alt="..."></img>
            <div className="nav-logo-text">Crypto Tracker</div>
          </div>
          <img className="nav-image" src="search.png" alt="..."></img>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="/offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          ></div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
