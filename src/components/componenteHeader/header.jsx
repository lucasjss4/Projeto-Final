import React, { useState } from "react";
import logo from '../../assets/logo.png';
import menuIcon from '../../assets/menu-icon.png';
import perfilIcon from '../../assets/perfil.png';
import './header.css';
import { IoAddOutline } from "react-icons/io5";


function Header({ toggleSideBar, openAddClass , isTeacher}) {
    
    return <div className="header">
        <div className="menu-logo">
            <img src={menuIcon} id="menu" onClick={toggleSideBar} />
            <img className="logo" src={logo} />
        </div>
        <div className="menu">
            {isTeacher ? <div className="addTurma">
                <input type="checkbox" id="inputTurma" />
                <IoAddOutline style={{ cursor: "pointer" }} size={40} />
                <p onClick={openAddClass} >CRIAR TURMA</p>
            </div> : ''}
            <img id="perfil" src={perfilIcon} />
        </div>
    </div>
}


export default Header;