import React from "react";
import './style.css';
import { IoCloseOutline } from "react-icons/io5";

const FormCriarTurma = () => {
    return <div className="fundo">
        <form id="criarTurma">
            <p>CRIAR TURMA</p>
            <input type="text" placeholder="NOME:" />
            <input type="text" placeholder="DESCRIÇÃO:" />
            <input type="text" id="senha" placeholder="SENHA DE ACESSO: (Não obrigatório)" />
            <input id="enviar" type="submit" value="CRIAR TURMA" />
        </form>
    </div>
}

export default FormCriarTurma;