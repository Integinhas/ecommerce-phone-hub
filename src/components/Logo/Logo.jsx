import React from 'react';
import logoImage from './imgLogo/logo-phone-hub.png';

import './logo.css';

function Logo() {
  return ( 
    <img src={logoImage} alt="logo-phone-hub" className="logo"/>
  );
}

export default Logo;
