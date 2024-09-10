import React from "react";
import logout from './logout.svg';
import './style.css';


function Atividade() {
    return <div className="container" id="container">
        <div className="exercicio">
            <div className="enunciado">
                <h1>Questão 7:</h1>
                <p>Uma embarcação se encontra no ponto B, situado a 1 km da costa, de frente para o ponto L. O destino dessa embarcação é o farol, localizado no ponto F, distante sqrt(3) * km do ponto L. Para efeito de orientação, o comandante dessa embarcação precisa calcular a medida do ângulo LBF</p>
            </div>
            <div className="escolhaResp">
                <div className="opcao">
                    <input type="radio" id="escolhaUser1" name="radio" />
                    <label htmlFor="escolhaUser1"></label>
                    <p>a. 30</p>
                </div>
                <div className="opcao">
                    <input type="radio" id="escolhaUser2" name="radio" />
                    <label htmlFor="escolhaUser2"></label>
                    <p>b. 45</p>
                </div>
                <div className="opcao">
                    <input type="radio" id="escolhaUser3" name="radio" />
                    <label htmlFor="escolhaUser3"></label>
                    <p>c. 48</p>
                </div>
                <div className="opcao">
                    <input type="radio" id="escolhaUser4" name="radio" />
                    <label htmlFor="escolhaUser4"></label>
                    <p>d. 60</p>
                </div>
                <div className="opcao">
                    <input type="radio" id="escolhaUser5" name="radio" />
                    <label htmlFor="escolhaUser5"></label>
                    <p>e. 95</p>
                </div>
            </div>
        </div>
        <div className="questoesResp">
            <img src={logout} />
            <div className="titleResp">
                <h1>Questões respondidas</h1>
            </div>
            <div className="navQuestao">
                <div className="number F">
                    <p>1</p>
                </div>
                <div className="number F">
                    <p>2</p>
                </div>
                <div className="number F">
                    <p>3</p>
                </div>
                <div className="number F">
                    <p>4</p>
                </div>
                <div className="number F">
                    <p>5</p>
                </div>
                <div className="number F">
                    <p>6</p>
                </div>
                <div className="number F">
                    <p>7</p>
                </div>
                <div className="number">
                    <p>8</p>
                </div>
                <div className="number">
                    <p>9</p>
                </div>
                <div className="number">
                    <p>10</p>
                </div>
                <div className="number">
                    <p>11</p>
                </div>
                <div className="number">
                    <p>12</p>
                </div>
            </div>
            <div className="buttons">
                <button type="submit" id="voltar">VOLTAR</button>
                <button type="submit" id="proximo">PRÓXIMO EXERCÍCIO</button>
            </div>
            <div id="enviarProva">
                <button type="submit">ENVIAR PROVA</button>
            </div>
        </div>
    </div>
}

export default Atividade;