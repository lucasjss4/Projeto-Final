import React, { useState } from "react";
import Header from "../components/ComponenteHeader/header";
import Menu from "../components/ComponenteMenu/Menu";
import Busca from "../components/ComponenteBusca/Busca";
import ListaPendentes from "../components/ComponentePendente/ListaPendentes";
import ListaAtividadeAluno from "../components/ComponenteListaAtividadeAluno/ListaAtividadeAluno";

const PagePendenteAluno = () => {
    const [isSideBarOpen, setSideBarOpen] = useState(false);

    const toggleSideBar = () => {
        setSideBarOpen(prevState => !prevState);
    }
    
    const nomeTurma = 'PENDENTES :';

    const tituloAtividade = 'Trigonometria - Atividade01';

    
    return <>
        <Header toggleSideBar={toggleSideBar} />
        <div className="container">
            <Menu isOpen={isSideBarOpen} />
            <div className="content">
                <Busca nomeTurma={nomeTurma} />
                <div className="contentAtividades">
                    <ListaAtividadeAluno tituloAtividade={tituloAtividade} />
                </div>
            </div>
        </div>
    </>
}

export default PagePendenteAluno;