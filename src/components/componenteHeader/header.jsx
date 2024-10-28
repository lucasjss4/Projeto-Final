import React, { useState } from "react";
import logo from '../../assets/logo.png';
import menuIcon from '../../assets/menu-icon.png';
import perfilIcon from '../../assets/perfil.png';
import './header.css';
import { IoAddOutline, IoCloseOutline } from "react-icons/io5";


function Header({ toggleSideBar, openAddClass, isTeacher, config, sairDaPagina }) {

    return <div className="header">
        <div className="menu-logo">
            {config ? '' : <img src={menuIcon} id="menu" onClick={toggleSideBar} />}
            <img className="logo" src={logo} />
        </div>
        {config && <div className="config">
            <h1>CONFIGURAÇÕES</h1>
        </div>}
        <div className="menu">
            {isTeacher ? <div className="addTurma">
                <input type="checkbox" id="inputTurma" />
                <IoAddOutline style={{ cursor: "pointer" }} size={40} />
                <p onClick={openAddClass} >CRIAR TURMA</p>
            </div> : ''}
            {config ? <IoCloseOutline size={35} style={{ cursor: "pointer" }} onClick={sairDaPagina} /> : <img id="perfil" src={perfilIcon} />}
        </div>
    </div>
}


export default Header;