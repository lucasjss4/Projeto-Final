import React from "react";
import './CriarTurma.css';
import { IoCloseOutline } from "react-icons/io5";

const FormCriarTurma = ({closeAddClass}) => {
    return <div id="fundo" className="fundo">
        <form id="criarTurma" >
            <button type="button" id="button"  >
                <IoCloseOutline size={30} onClick={closeAddClass}  />
            </button>
            <p>CRIAR TURMA</p>
            <input type="text" placeholder="NOME:" required/>
            <input type="text" placeholder="DESCRIÇÃO:" required />
            <input type="text" id="senha" placeholder="SENHA DE ACESSO: (Não obrigatório)" />
            <input id="enviar" type="submit" value="CRIAR TURMA" />
        </form>
    </div>
}

export default FormCriarTurma;