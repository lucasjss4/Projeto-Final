import React from "react";
import { BsGraphUp } from "react-icons/bs";
import { FaPencilAlt } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import './ListaAtividade.css';

const ListaAtividade = ({tituloAtividade, relatorioTurma}) => {
    return <div className="atividade">
        <div className="sideLeft">
            <FaPencilAlt size={20} />
            <div className="titleActivity">
                <p>{tituloAtividade}</p>
            </div>
        </div>
        <div className="infos">
            <div className="atividadesFeitas">
                <p>27/30</p>
                <HiUserGroup size={20} onClick={relatorioTurma}/>
            </div>
            <BsGraphUp size={20} />
        </div>
    </div>
}

export default ListaAtividade;