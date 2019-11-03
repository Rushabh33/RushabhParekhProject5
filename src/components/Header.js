import React from 'react';
import Logo from './Logo';
import NavBar from './NavBar';

const Header = () => {
  return (
    <header>
      <div className="headerContainer wrapper">
        <Logo />
        <NavBar />
      </div>
    </header>
  )
}

export default Header;