import React, { useState } from "react";
import Header from "../components/ComponenteHeader/header";
import Menu from "../components/ComponenteMenu/Menu";
import Busca from "../components/ComponenteBusca/Busca";
import Relatorio from "../components/ComponenteRelatorio/relatorio";

const PageRelatorio = () => {
    const [isSideBarOpen, setSideBarOpen] = useState(false);

    const toggleSideBar = () => {
        setSideBarOpen(prevState => !prevState);
    }
    
    const [isClass, setClass] = useState(false);

    return <>
        <Header toggleSideBar={toggleSideBar} />
        <div className="container">
            <Menu isOpen={isSideBarOpen} />
            <div className="content">
                <Busca isClass={isClass} />
                <Relatorio />
            </div>
        </div>
    </>
}

export default PageRelatorio;