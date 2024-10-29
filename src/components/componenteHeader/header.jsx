import React, { useState } from "react";
import logo from '../../assets/logo.png';
import menuIcon from '../../assets/menu-icon.png';
import perfilIcon from '../../assets/perfil.png';
import './header.css';
import { IoAddOutline, IoCloseOutline } from "react-icons/io5";


function Header({ toggleSideBar, openAddClass, isTeacher, config, sairDaPagina }) {

    const [logoutButton, setLogoutButton] = useState(false);

    const logoutUser = () => {

        setLogoutButton(!logoutButton);

    }

    //Esse componente é para a renderização do cabeçalho da página
    //Podendo ter algumas configurações diferentes dependendo da propriedade que receber
    
    //O cabeçalho na home do professor recebe um "botão mais" para adicionar turmas
    //O cabeçalho na página de configuração recebe um "botão X" para fechar a página
    //O cabeçalho na página de configuração recebe um título no meio "CONFIGURAÇÕES"
    //O cabeçalho possui em todas as páginas exceto a de configuração um botão na imagem do perfil para aparecer um menu de logout

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
            {config ?
                <IoCloseOutline size={35} style={{ cursor: "pointer" }} onClick={sairDaPagina} />
                :
                <div className="logout">
                    <input type="checkbox" onClick={logoutUser} />
                    <img id="perfil" src={perfilIcon} />
                    {logoutButton && <div className="logoutButton">
                        <p onClick={() => window.location.href = '/logout'}>LOGOUT</p>
                    </div>}
                </div>
            }
        </div>
    </div>
}


export default Header;