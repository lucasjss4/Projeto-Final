import React, { useState } from "react";
import CodigoTurma from "../components/ComponenteCodigoTurma/CodigoTurma";
import Header from "../components/ComponenteHeader/header";
import Busca from "../components/ComponenteBusca/Busca";
import Menu from "../components/ComponenteMenu/Menu";

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

    return <>
        {isEnterInClass && <CodigoTurma fecharTurma={fecharTurma} />}
        <Header toggleSideBar={toggleSideBar} />
        <div className="container">
            <Menu isOpen={isSideBarOpen} />
            <div className="content">
                <Busca isTurma={isTurma} abrirTurma={abrirTurma} />
            </div>
        </div>
    </>
}

export default PageHomeAlunos;