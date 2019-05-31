import React from 'react';

const NavLogoHeader = (props) => {
    return (
        <div className="navLogoCon wrapper">
            <div className="logoCon">
                <div className="redRectangLogo"></div>
            </div>
            <nav className="navLinksCon">
                <ul className="navLinksUl">
                    <li className="navLinks">home</li>
                    <li className="navLinks">products</li>
                    <li className="navLinks">contact us</li>
                </ul>
            </nav>
        </div>
    )
}

export default NavLogoHeader;