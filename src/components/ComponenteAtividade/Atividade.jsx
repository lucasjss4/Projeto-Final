import React, { useState } from "react";
import logout from '../../assets/logout.svg';
import './Atividade.css';

function Atividade() {

    const [valueSelection, setValueSelection] = useState('');

    /* Essa função faz parte da lógica usada para clicar em uma opção em qualquer lugar e ela ficar marcada */
    const handleClick = (value) => {
        setValueSelection(value);
    }

    /* Esse componente renderiza a atividade que o aluno irá fazer */
    return <div className="containerAtividade">
        <div className="exercicio">
            <div className="enunciado">
                <h1>Questão 7:</h1>
                <p>Uma embarcação se encontra no ponto B, situado a 1 km da costa, de frente para o ponto L. O destino dessa embarcação é o farol, localizado no ponto F, distante sqrt(3) * km do ponto L. Para efeito de orientação, o comandante dessa embarcação precisa calcular a medida do ângulo LBF</p>
            </div>
            <div className="escolhaResp">
                <div className="opcao" onClick={() => handleClick('opcao1')}>
                    <input type="radio" id="escolhaUser1" value="opcao1" checked={valueSelection === 'opcao1'} onChange={() => setValueSelection('opcao1')} name="radio" />
                    <label htmlFor="escolhaUser1"></label>
                    <p>a. 30</p>
                </div>
                <div className="opcao" onClick={() => handleClick('opcao2')}>
                    <input type="radio" id="escolhaUser2" name="radio" value="opcao2" checked={valueSelection === 'opcao2'} onChange={() => setValueSelection('opcao2')} />
                    <label htmlFor="escolhaUser2"></label>
                    <p>b. 45</p>
                </div>
                <div className="opcao" onClick={() => handleClick('opcao3')}>
                    <input type="radio" id="escolhaUser3" name="radio" value="opcao3" checked={valueSelection === 'opcao3'} onChange={() => setValueSelection('opcao3')} />
                    <label htmlFor="escolhaUser3"></label>
                    <p>c. 48</p>
                </div>
                <div className="opcao" onClick={() => handleClick('opcao4')}>
                    <input type="radio" id="escolhaUser4" name="radio" value="opcao4" checked={valueSelection === 'opcao4'} onChange={() => setValueSelection('opcao4')} />
                    <label htmlFor="escolhaUser4"></label>
                    <p>d. 60</p>
                </div>
                <div className="opcao" onClick={() => handleClick('opcao5')}>
                    <input type="radio" id="escolhaUser5" name="radio" value="opcao5" checked={valueSelection === 'opcao5'} onChange={() => setValueSelection('opcao5')} />
                    <label htmlFor="escolhaUser5"></label>
                    <p>e. 95</p>
                </div>
            </div>
        </div>
        <div className="questoesResp">
            <img src={logout} onClick={() => window.location.href = '/aluno/pendentes'} style={{cursor: "pointer"}}/>
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