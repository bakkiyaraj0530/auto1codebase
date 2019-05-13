import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';

const NotFoundPage = () => {
  return (    
    <div className="content-container">
        <div className="errorpage-section"> <img src={Logo} />
            <h1 className="heading-text">404 - Not Found</h1>
            <p className="information-text">Sorry, the page you are looking for does not exist.</p>
            <p className="information-text">You can always go back to the <span className="link">           
            <Link to="/"> homepage </Link></span>
            </p>
        </div>
    </div>
  );
};

export default NotFoundPage;
