import React, { useState } from "react";
import Header from "../components/ComponenteHeader/header";
import Menu from "../components/ComponenteMenu/Menu";
import Busca from "../components/ComponenteBusca/Busca";
import ListaAluno from "../components/ComponenteListaAluno/ListaAluno";

const PageAlunosDevedores = () => {
    const [isSideBarOpen, setSideBarOpen] = useState(false);

    const toggleSideBar = () => {
        setSideBarOpen(prevState => !prevState);
    }
    
    const nomeTurma = 'PENDENTES :';

    const nomeDaTurma = 'Trigonometria - Atividade01';

    const isClass = false;
    
    const isPending = false;

    const nomeAluno1 = 'LUCAS JOSÉ DA SILVA SANTOS';
    const nomeAluno2 = 'GABRIEL SILVA GOUVÊA';
    const nomeAluno3 = 'JOÃO GUSTAVO CANTÃO';

    return <>
        <Header toggleSideBar={toggleSideBar} />
        <div className="container">
            <Menu isOpen={isSideBarOpen} />
            <div className="content">
                <Busca nomeTurma={nomeTurma} />
                <div className="contentAtividades">
                    <ListaAluno nomeAluno={nomeAluno1} isPending={isPending} />
                    <ListaAluno nomeAluno={nomeAluno2} isPending={isPending} />
                    <ListaAluno nomeAluno={nomeAluno3} isPending={isPending} />
                </div>
            </div>
        </div>
    </>
}

export default PageAlunosDevedores;