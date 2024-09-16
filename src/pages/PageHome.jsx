import React, { useState } from "react";
import Menu from "../components/ComponenteMenu/Menu";
import Header from "../components/ComponenteHeader/header";
import Busca from "../components/ComponenteBusca/Busca";
import FormCriarTurma from "../components/ComponenteTurma/FormCriarTurma";

const PageHome = () => {
    const [isSideBarOpen, setSideBarOpen] = useState(false);

    const toggleSideBar = () => {
        setSideBarOpen(prevState => !prevState);
    }

    const [isCreateClass, setCreateClass] = useState(false);

    const openAddClass = () => {
        setCreateClass(prevState => !prevState);
    }

    return <>
        {isCreateClass && <FormCriarTurma /> }
        <Header toggleSideBar={toggleSideBar}  openAddClass={openAddClass} />
        <div className="container">
            <Menu isOpen={isSideBarOpen} />
            <Busca />
        </div>
    </>
}

export default PageHome;