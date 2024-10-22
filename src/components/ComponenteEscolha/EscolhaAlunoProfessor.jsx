import React, { useState } from "react";
import perfil from "../../assets/perfil.png"
import './EscolhaAlunoProfessor.css';

const EscolhaAlunoProfessor = () => {

    const email = localStorage.getItem('email');

    const [radioInfo, setRadioInfo] = useState('');

    const handleChange = (e) => {
        setRadioInfo(e.target.value);
    }

    const irParaProximaPagina = () => {

        if(radioInfo === 'aluno'){
            window.location.href = '/aluno';
        }else if(radioInfo === 'professor'){
            window.location.href = '/';
        }else{
            alert('Selecione se irá entrar como aluno ou professor');
        }

    }


    return <div className="escolha">
        <div className="imgEscolha">
            <p id="perfilImg">PERFIL</p>
            <img src={perfil} alt="perfil" />
            <p id="trocarPerfil">TROCAR FOTO</p>
        </div>
        <div className="infoPerfil">
            <div className="infoDoPerfil">
                <p id="classTitle">NOME</p>
                <p id="infoBody">JOÃO GUSTAVO MENDONÇA CANTÃO</p>
            </div>
            <div className="infoDoPerfil">
                <p id="classTitle">EMAIL</p>
                <p id="infoBody">{email}</p>
            </div>
            <div className="infoDoPerfil">
                <p id="classTitle">PROFESSOR</p>
                <input type="radio" name="radios" id="radioInput" value="professor" onChange={handleChange} />
                <label id="label1" htmlFor="radioInput"></label>
                <p id="classTitle">Aluno</p>
                <input type="radio" name="radios" id="radioInput2" value="aluno" onChange={handleChange} />
                <label id="label2" htmlFor="radioInput2"></label>
            </div>
        </div>
        <button id="entrarNoSite" onClick={irParaProximaPagina} type="submit">ENTRAR</button>
        <div className="termos">
            <p>Ao clicar em "Entrar", você concorda com os termos de uso</p>
        </div>
    </div>
}

export default EscolhaAlunoProfessor;