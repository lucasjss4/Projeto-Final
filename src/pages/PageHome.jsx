import React, { useState } from "react";
import Menu from "../components/ComponenteMenu/Menu";
import Header from "../components/ComponenteHeader/header";
import Busca from "../components/ComponenteBusca/Busca";
import FormCriarTurma from "../components/ComponenteCriarTurma/FormCriarTurma";
import Turma from "../components/ComponenteTurma/Turma";


const PageHome = () => {
    const [isSideBarOpen, setSideBarOpen] = useState(false);

    const toggleSideBar = () => {
        setSideBarOpen(prevState => !prevState);
    }

    const [isCreateClass, setCreateClass] = useState(false);

    const openAddClass = () => {
        setCreateClass(true);
    }

    const closeAddClass = () => {
        setCreateClass(false);
    }

    const [isClass, setClass] = useState(false);

    const [isTeacher, setTeacher] = useState(true);

    return <>
        {isCreateClass && <FormCriarTurma closeAddClass={closeAddClass} />}
        <Header toggleSideBar={toggleSideBar} openAddClass={openAddClass} isTeacher={isTeacher} />
        <div className="container"> 
            <Menu isOpen={isSideBarOpen} />
            <div className="content">
                <Busca isClass={isClass} />
                <div className="contentTurma">
                    <Turma />   
                </div>
            </div>
        </div>
    </>
}

export default PageHome;