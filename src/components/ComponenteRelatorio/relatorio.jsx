import React from "react";
import logout from './logout.svg';
import './style.css'

function Relatorio() {
    return <div className="container">
        <div className="fundo">
            <div className="resumoContainer">
                <div className="grafico">
                    <h1>50%</h1>
                </div>
                <div className="containerErrosEAcertos">
                    <div className="acertos">
                        <p id="porcem">ACERTOS:  50%</p>
                        <div className="quantidade">
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                            <p>6</p>
                            <p>9</p>
                            <p>11</p>
                            <p>13</p>
                            <p>14</p>
                            <p>17</p>
                            <p>20</p>
                        </div>
                    </div>
                    <div className="erros">
                        <p id="porcem">ERROS:  50%</p>
                        <div className="quantidade">
                            <p>4</p>
                            <p>5</p>
                            <p>7</p>
                            <p>8</p>
                            <p>10</p>
                            <p>12</p>
                            <p>15</p>
                            <p>16</p>
                            <p>18</p>
                            <p>19</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="detalhamento">
                <div className="detalhamentoAcertosEErros">
                    <button type="submit" id="acertos">ACERTOS</button>
                    <button type="submit" id="erros">ERROS</button>
                </div>
                <div className="questoes">
                    <p className="acerto">1</p>
                    <p className="acerto">2</p>
                    <p className="acerto">3</p>
                    <p>4</p>
                    <p>5</p>
                    <p className="acerto">6</p>
                    <p>7</p>
                    <p className="acerto">8</p>
                    <p>9</p>
                    <p>10</p>
                    <p className="acerto">11</p>
                    <p>12</p>
                    <p className="acerto">13</p>
                    <p className="acerto">14</p>
                    <p>15</p>
                    <p >16</p>
                    <p className="acerto">17</p>
                    <p>18</p>
                    <p>19</p>
                    <p className="acerto">20</p>
                </div>
                <div className="numQuestao">
                    <p>1</p>
                </div>
                <div className="enunciadoQuestao">
                    <p>Qual é o valor de x que satisfaz a equação 3 -5=163x-5=16?</p>
                </div>
                <div className="detalhamentoDaQuestao">
                    <div className="opcoes">
                        <ul>
                            <li>A - 7</li>
                            <li>B - 6</li>
                            <li>C - 5</li>
                            <li>D - 4</li>
                            <li>E - 3</li>
                        </ul>
                    </div>
                    <div className="respostaCorretaExplicacao">
                        <div className="respostaCorreta">
                            <p>Resposta correta: A - 7</p>
                        </div>
                        <div className="explicacao">
                            Para resolver a equação, você pode seguir os seguintes passos:<br />
                            Adicione 5 a ambos os lados da equação: 3x−5+5=16+5<br />
                            Simplifique: 3x =21<br />
                            Divida ambos os lados por 3: x=7<br />
                            Portanto, a resposta correta é a alternativa A - 7.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Relatorio;