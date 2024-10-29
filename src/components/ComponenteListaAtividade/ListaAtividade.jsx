import React from "react";
import { BsGraphUp } from "react-icons/bs";
import { FaPencilAlt } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import './ListaAtividade.css';

const ListaAtividade = ({tituloAtividade, relatorioTurma}) => {

    //Esse componente faz a renderização das atividades por turma, e clicando em uma das atividades mostra a lista de aluno para acessar o relátório

    return <div className="atividade"  onClick={relatorioTurma}>
        <div className="sideLeft">
            <FaPencilAlt size={20} />
            <div className="titleActivity">
                <p>{tituloAtividade}</p>
            </div>
        </div>
        <div className="infos">
            <div className="atividadesFeitas">
                <p>27/30</p>
                <HiUserGroup size={20}/>
            </div>
            <BsGraphUp size={20} />
        </div>
    </div>
}

export default ListaAtividade;