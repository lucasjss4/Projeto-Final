import React from "react";
import { BsGraphUp } from "react-icons/bs";
import { FaPencilAlt } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import './ListaAtividadeAluno.css';

const ListaAtividadeAluno = ({tituloAtividade}) => {

    const redirecionarAtividade = () => {
        window.location.href = '/atividade';
    }

    return <div className="atividade" style={{cursor: "pointer"}} onClick={redirecionarAtividade}>
        <div className="sideLeft">
            <FaPencilAlt size={20} />
            <div className="titleActivity">
                <p>{tituloAtividade}</p>
            </div>
        </div>
        <div className="infos">
            <BsGraphUp size={20} />
        </div>
    </div>
}

export default ListaAtividadeAluno;