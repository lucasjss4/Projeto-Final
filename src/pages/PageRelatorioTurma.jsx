import React, { useState } from "react";
import Header from "../components/ComponenteHeader/header";
import Menu from "../components/ComponenteMenu/Menu";
import Busca from "../components/ComponenteBusca/Busca";
import ListaAluno from "../components/ComponenteListaAluno/ListaAluno";
import { useParams } from "react-router-dom";

const PageRelatorioTurma = () => {
    const {nomeAtividade} = useParams();

    const [isSideBarOpen, setSideBarOpen] = useState(false);

    const toggleSideBar = () => {
        setSideBarOpen(prevState => !prevState);
    }

    const [isCreateClass, setCreateClass] = useState(false);

    const openAddClass = () => {
        setCreateClass(prevState => !prevState);
    }

    const closeAddClass = () => {
        setCreateClass(prevState => !prevState);
    }

    const [isClass, setClass] = useState(false);

    const [isTeacher, setTeacher] = useState(false);

    const aluno1 = 'JOÃO GUSTAVO MENDONÇA CANTÃO';
    const aluno2 = 'LUCAS JOSÉ DA SILVA SANTOS';
    const aluno3 = 'GABRIEL SILVA GOUVÊA';
    const aluno4 = 'EDUARDO MACEDO DE CARVALHO';

    const [isTurmaRelatorio, setTurmaRelatorio] = useState(true);

    return <>
        <Header toggleSideBar={toggleSideBar} openAddClass={openAddClass} isTeacher={isTeacher} />
        <div className="container">
            <Menu isOpen={isSideBarOpen} />
            <div className="content" style={{border : "none"}}>
                <Busca isClass={isClass} isTurmaRelatorio={isTurmaRelatorio} nomeAtividade={nomeAtividade}/>
                <div className="contentAlunos">
                    <ListaAluno nomeAluno={aluno1} />
                    <ListaAluno nomeAluno={aluno2} />
                    <ListaAluno nomeAluno={aluno3} />
                    <ListaAluno nomeAluno={aluno4} />
                    <ListaAluno nomeAluno={aluno4} />
                    <ListaAluno nomeAluno={aluno4} />   
                </div>
            </div>
        </div>
    </>
}

export default PageRelatorioTurma;