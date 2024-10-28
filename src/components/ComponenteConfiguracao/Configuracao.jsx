import React from "react";
import perfil from '../../assets/perfil.png';
import './Configuracao.css';    

const Configuracao = () => {
    return <div className="configuracao" >
        <div className="headerConfig">
            <p>PERFIL</p>
            <div className="configImg">
                <img src={perfil} alt="" />
                <p>TROCAR FOTO</p>
            </div>
        </div>
        <div className="configConta">
            <p id="configTitle">Configurações da conta</p>
            <p id="phraseGoogle">Altere sua senha e opções de segurança e acesse outros serviços Google. <a href="">Gerenciar</a></p>
        </div>
        <div className="opcoesConfig">
            <p id="notificacao">NOTIFICAÇÕES</p>
            <div className="notificacoes first">
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
            <div className="notificacoes">
                <p>Comentários que fazem referência a você</p>
                <input type="radio" />
            </div>
            <div className="notificacoes">
                <p>Comentários particulares nas atividades</p>
                <input type="radio" />
            </div>
            <div className="notificacoes">
                <p>Turmas nas quais você se inscreveu</p>
                <input type="radio" />
            </div>
            <div className="notificacoes">
                <p>Atividades e outras postagens dos professores</p>
                <input type="radio" />
            </div>
            <div className="notificacoes">
                <p>Notas e trabalhos devolvidos pelos seus professores</p>
                <input type="radio" />
            </div>
            <div className="notificacoes">
                <p>Convites para participar de turmas como aluno</p>
                <input type="radio" />
            </div>
        </div>
    </div>
}

export default Configuracao;