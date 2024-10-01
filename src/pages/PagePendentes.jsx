import React, { useState } from "react";
import Header from "../components/ComponenteHeader/header";
import Menu from "../components/ComponenteMenu/Menu";
import Busca from "../components/ComponenteBusca/Busca";
import ListaPendentes from "../components/ComponentePendente/ListaPendentes";

const PagePendentes = () => {
    
    const [isSideBarOpen, setSideBarOpen] = useState(false);

    const toggleSideBar = () => {
        setSideBarOpen(prevState => !prevState);
    }
    
    const nomeTurma = 'PENDENTES :';

    const nomeDaTurma = 'DS - PRO';

    const isClass = true;
    
    return <>
        <Header toggleSideBar={toggleSideBar} />
        <div className="container">
            <Menu isOpen={isSideBarOpen} />
            <div className="content">
                <Busca nomeTurma={nomeTurma} />
                <div className="contentAtividades">
                    <ListaPendentes nomeDaTurma={nomeDaTurma} isClass={isClass} />
                </div>
            </div>
        </div>
    </>
}

export default PagePendentes;