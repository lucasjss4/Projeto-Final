import React, { useState } from "react";
import Header from "../components/ComponenteHeader/header";
import Menu from "../components/ComponenteMenu/Menu";
import Busca from "../components/ComponenteBusca/Busca";
import FormCriarExercicio from "../components/ComponenteCriarExercicio/formCriarExecicio";

const PageGerarAtividade = () => {
    const [isSideBarOpen, setSideBarOpen] = useState(false);

    const toggleSideBar = () => {
        setSideBarOpen(prevState => !prevState);
    }
    
    const [isClass, setClass] = useState(true);

    const [isCreateActivity, setCreateActivity] = useState(false);

    const gerarAtividade = () => {
        setCreateActivity(prevState => !prevState);
    }

    const closeGerarAtividade = () => {
        setCreateActivity(prevState => !prevState);
    }

    const [isTeacher, setTeacher] = useState(false);

    return <>
        {isCreateActivity && <FormCriarExercicio closeGerarAtividade={closeGerarAtividade} />}
        <Header toggleSideBar={toggleSideBar} isTeacher={isTeacher} />
        <div className="container">
            <Menu isOpen={isSideBarOpen} />
            <div className="content">
                <Busca isClass={isClass}  gerarAtividade={gerarAtividade} />
            </div>
        </div>
    </>
}

export default PageGerarAtividade;