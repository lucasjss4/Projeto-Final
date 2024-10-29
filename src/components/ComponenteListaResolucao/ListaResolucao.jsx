import React from "react";
import { BsGraphUp } from "react-icons/bs";
import { FaPencilAlt } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import './ListaResolucao.css';

const ListaResolucao = ({tituloAtividade}) => {

    //Essa função faz o redirecionamento para o relatório de cada atividade feita pelo aluno
    const acessarRelatorio = () => {
        window.location.href = "/aluno/resolucoes/relatorio/" + tituloAtividade;
    }

    //Esse componente faz a renderização de todas as atividades feitas pelos alunos
    return <div className="resolucao" onClick={acessarRelatorio}>
        <div className="sideLeft">  
            <div className="titleActivity">
                <p>{tituloAtividade}</p>
            </div>
        </div>
        <div className="infos">
            <BsGraphUp size={20}  style={{cursor: "pointer", marginRight : "20px"}}  />
        </div>
    </div>
}

export default ListaResolucao;