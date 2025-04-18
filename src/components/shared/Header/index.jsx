import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Header = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <a href="/" className="d-inline-flex align-items-center col-md-3 mb-2 mb-md-0 text-white text-decoration-none">
          <i className="fa-solid fa-book fa-2xl" style={{ color: "white" }}></i>
          <span className="ms-2 fs-4">Mr Store</span>
        </a>
      </div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/Product">Product</Link>
        <Link to="/Team">Team</Link>
        <Link to="/Contact">Contact</Link>
      </nav>

      {/* Tambahkan ini untuk Login/Register */}
      <div className="login-link">
        <Link to="/Loginform">Login/Register</Link>
      </div>
    </header>
  );
};

export default Header;
