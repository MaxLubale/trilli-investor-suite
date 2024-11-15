import React from 'react';
import { Link } from 'react-router-dom';
import './navbar8.css';

const Navbar8 = () => {


  return (
    <header className="navbar8-container1">
      <header data-thq="thq-navbar" className="navbar8-navbar-interactive">
        <Link to="/">
          <img
            alt="Logo"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a618eeca7bec3840d12dc2b2400a4228f47af59067ff4be5dc9b77ea7f21b2f0?apiKey=07b7466444764966b3e325d12cdd6280&" // Replace with your logo source path
            className="navbar8-image1"
          />
        </Link>
        <div data-thq="thq-navbar-nav" className="navbar8-desktop-menu">
          <nav className="navbar8-links1">
            <Link
              to="/blokchain"
              className="navbar8-link11 thq-link thq-body-small"
            >
              <span className="navbar8-text18">3D Blockchain</span>
            </Link>
            
            <Link to="/trillionbank" className="thq-link thq-body-small">
              <span className="navbar8-text16">Trilli On Bank</span>
            </Link>

            <Link
              to="/trillionit"
              className="navbar8-link31 thq-link thq-body-small"
            >
              <span className="navbar8-text24">Trilli On-It Wallet</span>
            </Link>
            
            <Link to="/trifone" 
             className="thq-link thq-body-small">
              <span className="navbar8-text16">Tri Fone</span>
            </Link>

            <Link to="/trillipay" 
             className="thq-link thq-body-small">
              <span className="navbar8-text16">Trilli Pay</span>
            </Link>
            
          </nav>
          <div className="navbar8-buttons1">
            <Link
              to="/login"
              className="navbar8-action11 thq-button-animated thq-button-filled"
            >
              <span className="navbar8-text15">Login</span>
            </Link>
            <Link
              to="/logout"
              className="navbar8-action21 thq-button-outline thq-button-animated"
            >
              <span className="navbar8-text27">Logout</span>
            </Link>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="navbar8-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar8-icon14">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
      </header>
    </header>
  );
};



export default Navbar8
