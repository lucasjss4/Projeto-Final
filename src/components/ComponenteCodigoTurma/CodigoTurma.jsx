import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import  './CodigoTurma.css';

const CodigoTurma = ({fecharTurma}) => {
    return <div className="fundo">
        <form className="codigoTurma">
            <button id="button">
                <IoCloseOutline size={30} onClick={fecharTurma}  />
            </button>
            <p>CÓDIGO DA TURMA</p>
            <input type="text" placeholder="Digite o código da turma" required />
            <button id="entrar" type="submit">ENTRAR</button>
        </form>
    </div>
}

export default CodigoTurma;