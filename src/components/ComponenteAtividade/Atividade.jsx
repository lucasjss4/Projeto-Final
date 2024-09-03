import React from "react";
import logout from './logout.svg';
import './style.css';


function Atividade() {
    return <div className="container" id="container">
        <div className="containerQuestao">
            <div className="questao">
                <div className="title">
                    <p>QUESTÃO 01</p>
                </div>
            </div>
            <div className="sair">
                <img src={logout} />
            </div>
            <div className="enunciado">
                <p>QUANTO É 2+2 ?</p>
            </div>
        </div>
        <div className="resposta">
            <form>
                <button type="submit" id="red" >3</button>
                <button type="submit" id="blue" >2</button>
                <button type="submit" id="yellow" >4</button>
                <button type="submit" id="green" >5</button>
            </form>
        </div>
    </div>
}

export default Atividade;