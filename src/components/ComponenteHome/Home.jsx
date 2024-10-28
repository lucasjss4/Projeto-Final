import React from "react";
import './Home.css';
import logo from '../../assets/logo.png';
import historia from '../../assets/historia.jpeg';
import biologia from '../../assets/biologia.jpeg';
import matematica from '../../assets/matematica.jpeg';
import linguagens from '../../assets/linguagens.jpeg';
import esportes from '../../assets/esportes.jpeg';
import quimica from '../../assets/quimica.jpeg';
import geografia from '../../assets/geografia.jpeg';
import ds from '../../assets/desenvolvimentoSistemas.webp';
import { useNavigate } from "react-router-dom";

const Home = () => {
    return <div className="home">
        <div className="buttonsHome">
            <button id="buttonLogin" type="submit" onClick={() => window.location.href = '/login'}>Login</button>
            <button id="criarConta" type="submit" onClick={() => window.location.href = '/cadastro'}>Criar conta</button>
        </div>
        <div className="homeTitle">
            <div className="imgHome">
                <img src={logo} alt="logo" />
            </div>
            <div className="infoHome">
                <p id="tituloHome">APRENDER E ENSINAR COM MAIS PRATICIDADE E TECNOLOGIA</p>
                <p id="slogan">O QUE VAMOS APRENDER HOJE OU ENSINAR HOJE ?</p>
            </div>
        </div>
        <div className="boxCarrossel">
            <div className="carrossel">
                <div className="cenaUm">
                    <div className="box" style={{ backgroundColor: '#412C15' }}>
                        <p>HISTÓRIA</p>
                        <img src={historia} alt="" />
                    </div>
                    <div className="box" style={{ backgroundColor: '#EC971B' }}>
                        <p>MATEMÁTICA</p>
                        <img src={matematica} alt="" />
                    </div>
                    <div className="box" style={{ backgroundColor: '#643BB5' }}>
                        <p>LINGUAGENS</p>
                        <img src={linguagens} alt="" />
                    </div>
                    <div className="box" style={{ backgroundColor: '#479255' }}>
                        <p>BIOLOGIA</p>
                        <img src={biologia} alt="" />
                    </div>
                </div>
                <div className="cenaDois">
                    <div className="box" style={{ backgroundColor: '#007BFF' }}>
                        <p>GEOGRAFIA</p>
                        <img src={geografia} alt="" />
                    </div>
                    <div className="box" style={{ backgroundColor: '#FFD700' }}>
                        <p>QUÍMICA</p>
                        <img src={quimica} alt="" />
                    </div>
                    <div className="box" style={{ backgroundColor: '#20B2AA' }}>
                        <p id="ds">DESENVOLVIMENTO DE SISTEMAS</p>
                        <img src={ds} alt="" />
                    </div>
                    <div className="box" style={{ backgroundColor: '#FF4136' }}>
                        <p>EDUCAÇÃO FÍSICA</p>
                        <img src={esportes} alt="" />
                    </div>
                </div>
            </div>

        </div>
    </div>
}

export default Home;