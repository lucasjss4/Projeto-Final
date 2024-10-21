import React, { useState } from "react";
import CodigoTurma from "../components/ComponenteCodigoTurma/CodigoTurma";
import Header from "../components/ComponenteHeader/header";
import Busca from "../components/ComponenteBusca/Busca";
import Menu from "../components/ComponenteMenu/Menu";
import Turma from "../components/ComponenteTurma/Turma";

const PageHomeAlunos = () => {

    const [isEnterInClass, setEnterClass] = useState(false);

    const [isSideBarOpen, setSideBarOpen] = useState(false);

    const toggleSideBar = () => {
        setSideBarOpen(prevState => !prevState);
    }

    const isTurma = true;

    const abrirTurma = () => {
        setEnterClass(prevState => !prevState);
    }

    const fecharTurma = () => {
        setEnterClass(prevState => !prevState);
    }

    const [isAluno, setAluno] = useState(true);

    return <>
        {isEnterInClass && <CodigoTurma fecharTurma={fecharTurma} />}
        <Header toggleSideBar={toggleSideBar} />
        <div className="container">
            <Menu isOpen={isSideBarOpen} />
            <div className="content">
                <Busca isTurma={isTurma} abrirTurma={abrirTurma} />
                <div className="contentTurma">
                    <Turma isAluno={isAluno} />
                </div>
            </div>
        </div>
    </>
}

export default PageHomeAlunos;