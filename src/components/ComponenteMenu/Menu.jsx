import React, { useEffect, useState } from "react";

import { IoMdHome } from "react-icons/io";
import { MdOutlineWatchLater } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { BsGraphUp } from "react-icons/bs";
import { BsGearFill } from "react-icons/bs";
import './Menu.css'

function Menu({ isOpen }) {

    const [isAluno, setAluno] = useState(false);

    useEffect(() => {
        const alunoOrProfessor = localStorage.getItem('ProfessorOrAluno');

        if (alunoOrProfessor === 'aluno') {
            setAluno(true);
        } else {
            setAluno(false);
        }
    }, []);
    
    return <div>
        <div className={`menuBar ${isOpen ? 'open' : 'close'}`}>
            <a className="menuItem" href={isAluno ? '/aluno/home' : '/professor/home'} >
                <IoMdHome size={25} />
                <p>Inicio</p>
            </a>
            <a className="menuItem" href={isAluno ? '/aluno/pendentes' : '/professor/pendentes'} >
                <MdOutlineWatchLater size={25} />
                <p>Pendentes</p>
            </a>
            <a className="menuItem" href={isAluno ? '/aluno/home' : '/professor/home'} >
                <HiUserGroup size={25} />
                <p>Turmas</p>
            </a>
            <a className="menuItem" href={isAluno ? '/aluno/resolucoes' : ''}>
                <BsGraphUp size={25} />
                <p>Resoluções</p>
            </a>
            <a className="menuItem" href={isAluno ? '/aluno/configuracao' : '/professor/configuracao'} >
                <BsGearFill size={25} />
                <p>Configurações</p>
            </a>
        </div>
    </div>
}

export default Menu;