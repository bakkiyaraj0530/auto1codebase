import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/logo.png';

function Header() {
  return (
    <header>
      <div className="header-container">
        <Link to="/">
          <img className="brand-logo" src={Logo} alt="Logo" />
        </Link>
        <ul className="navigations">
          <li>Purchase</li>
          <li>My Orders</li>
          <li>Sell</li>
        </ul>
      </div>
    </header>
  );
}
export default Header;
