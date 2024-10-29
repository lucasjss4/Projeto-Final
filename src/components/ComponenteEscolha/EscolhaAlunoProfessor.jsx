import React, { useState } from "react";
import perfil from "../../assets/perfil.png"
import './EscolhaAlunoProfessor.css';

const EscolhaAlunoProfessor = () => {

    const email = localStorage.getItem('email');

    const [radioInfo, setRadioInfo] = useState('');

    //Função que pega qual input radio foi enviado pelo formulário e insere no state radioInfo
    const handleChange = (e) => {
        setRadioInfo(e.target.value);
    }

    //Essa função faz o direcionamento a partir da escolha do usuário
    //Se o usuário não escolheu nenhuma opção ele irá emitir um alert

    const irParaProximaPagina = () => {

        if(radioInfo === 'aluno'){
            window.location.href = '/aluno/home';
            localStorage.setItem('ProfessorOrAluno', 'aluno');
        }else if(radioInfo === 'professor'){
            window.location.href = '/professor/home';
            localStorage.setItem('ProfessorOrAluno', 'professor');
        }else{
            alert('Selecione se irá entrar como aluno ou professor');
        }

    }


    //Esse componente faz a renderização da página de escolha entre aluno e professor
    //A partir da escolha só é possível acessar as dependências de aluno ou professor

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