import React from 'react';
import theBeerStoreLogo from '../assets/theBeerStoreLogo.svg'

const Logo = () => {
  return (
    <div className="logo">
      <img src={theBeerStoreLogo} alt="BeerStore Logo" />
    </div>
  )
}

export default Logo;