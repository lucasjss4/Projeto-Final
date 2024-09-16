import React, { useState } from "react";
import Header from "../components/ComponenteHeader/header";
import Menu from "../components/ComponenteMenu/Menu";
import Atividade from "../components/ComponenteAtividade/Atividade";

const PageAtividade = () => {
    const [isSideBarOpen, setSideBarOpen] = useState(false);

    const toggleSideBar = () => {
        setSideBarOpen(prevState => !prevState);
    }

    return <>
        <Header toggleSideBar={toggleSideBar} />
        <div className="container">
            <Menu isOpen={isSideBarOpen} />
            <Atividade />
        </div>
    </>
}

export default PageAtividade;