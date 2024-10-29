import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import './Login.css';

const Login = ({ login, cadastro, termo }) => {

    //Essa função pega a mensagem do h1 se for cadastro é "CRIE UMA CONTA", senão é login "ENTRE OU CRIE UMA CONTA"
    const getMessage = () => {
        if (login) {
            return "ENTRE OU CRIE UMA CONTA";
        } else if (cadastro) {
            return "CRIE UMA CONTA"
        }
    }

    const [email, setEmail] = useState('');


    //Essa função faz o envio do formulário e se caso for cadastro realiza o cadastro
    const envioFormulário = (event) => {
        event.preventDefault();

        if (cadastro) {
            window.location.href = '/login';
        } else {
            window.location.href = '/escolha';
            localStorage.setItem('email', email);
        }
    }

    //Esse componente faz a renderização do form de login

    return <div className="contentLogin">
        <form className="login" onSubmit={envioFormulário}>
            <p id="title">{getMessage()}</p>
            <button type="button" id="google">
                <FaGoogle style={{ marginRight: '20px' }} />
                CONTINUAR COM O GOOGLE
            </button>
            <p style={{ fontSize: '12px', marginTop: '20px', marginBottom: '20px' }}>ou</p>
            <input className="inputText" onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email ou username" required />
            <input className="inputText" type="password" placeholder="Senha" required />
            <button type="submit" id="login">
                CONECTE-SE
            </button>
            {termo ?
                <>
                    <p id="termo">Ao clicar em "Criar Conta" ou "Continuar com o google", você concorda com os termos de uso</p>
                    <p style={{ fontSize: '10px', width: '150px', display: 'flex', justifyContent: 'space-around', color: '#999999' }}>JÁ TEM UMA CONTA?<a href="/login">ENTRAR</a></p>
                </>
                :
                <>
                    <a href=""><p id="redefinirSenha">REDEFINIR SENHA</p></a>
                    <p style={{ fontSize: '10px', display: 'flex', justifyContent: 'space-around', width: '165px', marginTop: '20px' }}>NÃO TEM CONTA?
                        <a href="/cadastro" style={{ color: '#007BE5', cursor: 'pointer' }}>CRIAR CONTA</a></p>
                </>
            }
        </form>
    </div>
}

export default Login;