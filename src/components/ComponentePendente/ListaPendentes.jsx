import React from "react";
import { BsGraphUp } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { MdOutlineWatchLater } from "react-icons/md";
import './ListaPendentes.css';

const ListaPendentes = ({ nomeDaTurma, isClass }) => {
    
    const pagePendenteTurma = () => {
        window.location.href = '/pendentes/' + nomeDaTurma;
    }

    const pageAlunosDevedores = () => {
        window.location.href = '/pendentes/' + nomeDaTurma + '/alunos';
    }
   
   return <div className="pendentes">
        <div className="nomeDaTurma">
            <p>{nomeDaTurma}</p>
        </div>
        <div className="icones">
            <p>03/30</p>
            {isClass ? <MdOutlineWatchLater id="watch" size={25} onClick={pagePendenteTurma} /> : <HiUserGroup id="group" onClick={pageAlunosDevedores} size={25} />}
            <BsGraphUp size={25} />
        </div>
    </div>
}

export default ListaPendentes;