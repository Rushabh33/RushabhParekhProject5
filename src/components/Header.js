import React from 'react';
import NavLogoHeader from './NavLogoHeader.js';

const Header = (props) => {
    return (
        <header>
            <NavLogoHeader/> 
            <h1 className="mainTitle">a Brew for Every occasion</h1>
        </header>
    )
}


export default Header;