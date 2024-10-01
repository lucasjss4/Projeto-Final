import React from "react";
import { FaGoogle } from "react-icons/fa";
import './Login.css';

const Login = ({ login, cadastro, termo }) => {

    const getMessage = () => {
        if (login) {
            return "ENTRE OU CRIE UMA CONTA";
        } else if (cadastro) {
            return "CRIE UMA CONTA"
        }
    }

    return <div className="contentLogin">
        <form className="login">
            <p id="title">{getMessage()}</p>
            <button type="button" id="google">
                <FaGoogle style={{ marginRight: '20px' }} />
                CONTINUAR COM O GOOGLE
            </button>
            <p style={{ fontSize: '12px', marginTop: '20px', marginBottom: '20px' }}>ou</p>
            <input className="inputText" type="text" placeholder="Email ou username" required />
            <input className="inputText" type="password" placeholder="Senha" required />
            <button type="submit" id="login">
                CONECTE-SE
            </button>
            {termo ? 
            <>
                <p id="termo">Ao clicar em "Criar Conta" ou "Continuar com o google", você concorda com os termos de uso</p>
                <p style={{fontSize : '10px', width : '150px', display : 'flex', justifyContent : 'space-around', color : '#999999'}}>JÁ TEM UMA CONTA?<a href="/login">ENTRAR</a></p>
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