import React from "react";

import { IoMdHome } from "react-icons/io";
import { MdOutlineWatchLater } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { BsGraphUp } from "react-icons/bs";
import { BsGearFill } from "react-icons/bs";

import './Menu.css'
import Configuracao from "../ComponenteConfiguracao/Configuracao";

function Menu({isOpen}) { 
    return <div>
        <div className={`menuBar ${isOpen ? 'open' : 'close'}`}>
            <a className="menuItem" href="/">
                <IoMdHome size={25} />
                <p>Inicio</p>
            </a>
            <a className="menuItem" href="/pendentes">
                <MdOutlineWatchLater size={25} />
                <p>Pendentes</p>
            </a>
            <a className="menuItem" href="/">
                <HiUserGroup size={25} />
                <p>Turmas</p>
            </a>
            <a className="menuItem">
                <BsGraphUp size={25} />
                <p>Resoluções</p>
            </a>
            <a className="menuItem">
                <BsGearFill size={25} />
                <p>Configurações</p>
            </a>
        </div>
    </div>
}

export default Menu;