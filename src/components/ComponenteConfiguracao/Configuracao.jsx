import React from "react";
import perfil from '../../assets/perfil.png';

const Configuracao = () => {
    return <div className="configuracao" >
        <div className="headerConfig">
            <p>Perfil</p>
            <div className="configImg">
                <img src={perfil} alt="" />
                <p>TROCAR FOTO</p>
            </div>
        </div>
        <div className="configConta">
            <p>Configurações da conta</p>
            <p>Altere sua senha e opções de segurança e acesse outros serviços Google. <a href="">Gerenciar</a></p>
        </div>
        <div className="opcoesConfig">
            <p>NOTIFICAÇÕES</p>
            <div className="notificacoes">
                <p>Permitir notificações por e-mail</p>
                <input type="radio" />
            </div>
            <div className="notificacoes">
                <p>Comentários</p>
                <input type="radio" />
            </div>
            <div className="notificacoes">
                <p>Comentários na sua postagem</p>
                <input type="radio" />
            </div>
            
        </div>
    </div>
}

export default Configuracao;