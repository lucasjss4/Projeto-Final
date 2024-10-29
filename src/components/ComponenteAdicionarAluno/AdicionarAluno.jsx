import React from "react";
import icon from '../../assets/Vector.svg';
import './adicionarAluno.css';
import { IoCloseOutline } from "react-icons/io5";

function AdicionarAluno({closeAddStudent}) {

    /* Essa função renderiza o modal com o código para o aluno entrar na turma */
     return <div className="fundo">
        <form className="adicionarAluno">
            <button id="buttonTurma">
                <IoCloseOutline size={30} onClick={closeAddStudent} />
            </button>
            <h1>ADICIONAR ALUNO</h1>
            <p id="infoCodigo">O ALUNO DEVE DIGITAR O CÓDIGO ABAIXO PARA ACESSAR A TURMA</p>
            <div className="codigoSala">
                <p id="titleCodigo">CÓDIGO DA TURMA:</p>
                <p id="codigoTurma">AX10V7BB42A1</p>
            </div>
        </form>
    </div>
}

export default AdicionarAluno;