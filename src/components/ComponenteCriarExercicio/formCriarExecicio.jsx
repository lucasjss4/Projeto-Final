import React from "react";
import icon from '../../assets/Vector.svg';
import './CriarExercicio.css';
import { IoCloseOutline } from "react-icons/io5";

function FormCriarExercicio({closeGerarAtividade}) {
     return <div className="fundo">
        <form className="formCriarExercicio">
            <button id="button">
                <IoCloseOutline size={30} onClick={closeGerarAtividade} />
            </button>
            <h1>CRIAR EXERCÍCIO</h1>
            <input type="text" placeholder="DIGITE O TEMA" className="input" required />
            <input type="number" placeholder="PERGUNTAS:" className="input" required />
            <div className="file">
                <label htmlFor="upload-file" id="labelInput">UPLOAD</label>
                <input type="file" id="upload-file"  />
                <div className="fileLogo">
                    <img src={icon} />
                </div>
            </div>
            <button type="submit" className="submit">GERAR EXERCÍCIO</button>
        </form>
    </div>
}

export default FormCriarExercicio;