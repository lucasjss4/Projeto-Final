import React from "react";
import { BsGraphUp } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { MdOutlineWatchLater } from "react-icons/md";
import './ListaPendentes.css';

const ListaPendentes = ({ nomeDaTurma, isClass }) => {
    
    const pagePendenteTurma = () => {
        window.location.href = '/professor/pendentes/' + nomeDaTurma;
    }

    const pageAlunosDevedores = () => {
        window.location.href = '/professor/pendentes/' + nomeDaTurma + '/alunos';
    }
   
   return <div className="pendentes" onClick={isClass ? pagePendenteTurma : pageAlunosDevedores }>
        <div className="nomeDaTurma">
            <p>{nomeDaTurma}</p>
        </div>
        <div className="icones">
            <p>03/30</p>
            {isClass ? <MdOutlineWatchLater id="watch" size={25} /> : <HiUserGroup id="group"  size={25} />}
            <BsGraphUp size={25} />
        </div>
    </div>
}

export default ListaPendentes;