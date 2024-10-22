import React, { useState } from "react";
import Header from "../components/ComponenteHeader/header";
import Menu from "../components/ComponenteMenu/Menu";
import Configuracao from "../components/ComponenteConfiguracao/Configuracao";

const PageConfiguracao = () => {
    const [isSideBarOpen, setSideBarOpen] = useState(false);

    const toggleSideBar = () => {
        setSideBarOpen(prevState => !prevState);
    }
    
    return <>
        <Header toggleSideBar={toggleSideBar} />
        <div className="container">
            <Menu isOpen={isSideBarOpen} />
            <div className="content">
                <Configuracao />
            </div>
        </div>
    </>
}

export default PageConfiguracao;