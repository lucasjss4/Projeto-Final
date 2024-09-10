import React from "react";
import logo from './logo.png';
import menuIcon from './menu-icon.png';
import perfilIcon from './perfil.png'
import './header.css';


function Header() {
    return <div className="header">
        <div className="menu-logo">
            <img src={menuIcon} id="menu" />
            <img className="logo" src={logo}  />
        </div>
        <div className="menu">
            <img id="perfil" src={perfilIcon} />
        </div>
    </div>
}


export default Header;