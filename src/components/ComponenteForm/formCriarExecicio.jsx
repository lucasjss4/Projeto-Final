import React from "react";
import icon from './Vector.svg';
import './style.css';

function formCriarExercicio() {
    return <div className="container">
        <form className="formCriarExercicio">
            <h1>CRIAR EXERCÍCIO</h1>
            <input type="text" placeholder="DIGITE O TEMA" className="input" />
            <input type="number" placeholder="PERGUNTAS:" className="input" />
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

export default formCriarExercicio;