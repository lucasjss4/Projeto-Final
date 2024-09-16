import React from "react";

import { IoMdHome } from "react-icons/io";
import { MdOutlineWatchLater } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { BsGraphUp } from "react-icons/bs";
import { BsGearFill } from "react-icons/bs";

import './style.css'

function Menu({isOpen}) {
    return <div>
        <div className={`menuBar ${isOpen ? 'open' : 'close'}`}>
            <div className="menuItem">
                <IoMdHome size={25} />
                <p>Inicio</p>
            </div>
            <div className="menuItem">
                <MdOutlineWatchLater size={25} />
                <p>Pendentes</p>
            </div>
            <div className="menuItem">
                <HiUserGroup size={25} />
                <p>Turmas</p>
            </div>
            <div className="menuItem">
                <BsGraphUp size={25} />
                <p>Resoluções</p>
            </div>
            <div className="menuItem">
                <BsGearFill size={25} />
                <p>Configurações</p>
            </div>
        </div>
    </div>
}

export default Menu;