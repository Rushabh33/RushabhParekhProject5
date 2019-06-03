import React from 'react';
import NavLogoHeader from './NavLogoHeader.js';

const Header = (props) => {
    return (
        <header>
            <div className="navLogoConCon">
                <NavLogoHeader/> 
            </div>
            <h1 className="mainTitle">beer is good</h1>
        </header>
    )
}


export default Header;