import React from "react";
import perfil from '../../assets/perfil.png'
import './ListaAluno.css';
import { BsGraphUp } from "react-icons/bs";
import { MdDelete } from "react-icons/md";


const ListaAluno = ({ nomeAluno, isPending }) => {

    const redirecionandoParaRelatorio = () => {

        window.location.href = '/relatorio/' + nomeAluno;

    }

    return <div className="listaAluno">
        <div className="sideLeft">
            <img src={perfil} />
            <div className="titleActivity">
                <p>{nomeAluno}</p>
            </div>
        </div>
        {isPending && <div className="info">
            <div className="excluirAluno">
                <MdDelete size={25} />
            </div>
            <div className="relatorioAluno">
                <BsGraphUp size={20} />
                <p onClick={redirecionandoParaRelatorio}>VER RELATÓRIO</p>
            </div>
        </div>}
    </div>
}

export default ListaAluno;