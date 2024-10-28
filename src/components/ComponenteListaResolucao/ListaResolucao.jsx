import React from "react";
import { BsGraphUp } from "react-icons/bs";
import { FaPencilAlt } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import './ListaResolucao.css';

const ListaResolucao = ({tituloAtividade}) => {

    const acessarRelatorio = () => {
        window.location.href = "/resolucoes/relatorio/" + tituloAtividade;
    }

    return <div className="resolucao">
        <div className="sideLeft">  
            <div className="titleActivity">
                <p>{tituloAtividade}</p>
            </div>
        </div>
        <div className="infos">
            <BsGraphUp size={20}  style={{cursor: "pointer", marginRight : "20px"}} onClick={acessarRelatorio} />
        </div>
    </div>
}

export default ListaResolucao;