import React, { useState } from "react";
import Header from "../components/ComponenteHeader/header";
import Menu from "../components/ComponenteMenu/Menu";
import Busca from "../components/ComponenteBusca/Busca";
import FormCriarExercicio from "../components/ComponenteCriarExercicio/formCriarExecicio";
import ListaAtividade from "../components/ComponenteListaAtividade/ListaAtividade";
import { useParams } from "react-router-dom";

const PageGerarAtividade = () => {

    const {nomeTurma} = useParams(); 

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

    const tituloAtividade = "Atividade de aprendizado - Trigonometria";
    
    const relatorioTurma = () => {
        window.location.href = "/turma/relatorio/" + tituloAtividade;
    }

    return <>
        {isCreateActivity && <FormCriarExercicio closeGerarAtividade={closeGerarAtividade} />}
        <Header toggleSideBar={toggleSideBar} isTeacher={isTeacher} />
        <div className="container">
            <Menu isOpen={isSideBarOpen} />
            <div className="content">
                <Busca isClass={isClass}  gerarAtividade={gerarAtividade} nomeTurma={nomeTurma} />
                <div className="contentAtividade">
                    <ListaAtividade tituloAtividade={tituloAtividade} relatorioTurma={relatorioTurma} />
                </div>
            </div>
        </div>
    </>
}

export default PageGerarAtividade;