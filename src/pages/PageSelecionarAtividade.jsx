import React, { useState } from "react";
import Header from "../components/ComponenteHeader/header";
import Menu from "../components/ComponenteMenu/Menu";
import Busca from "../components/ComponenteBusca/Busca";
import FormCriarExercicio from "../components/ComponenteCriarExercicio/formCriarExecicio";
import { useParams } from "react-router-dom";
import ListaAtividadeAluno from "../components/ComponenteListaAtividadeAluno/ListaAtividadeAluno";

const PageSelecionarAtividade = () => {

    const { nomeTurma } = useParams();

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

    return <>
        <Header toggleSideBar={toggleSideBar} isTeacher={isTeacher} />
        <div className="container">
            <Menu isOpen={isSideBarOpen} />
            <div className="content">
                <Busca nomeTurma={nomeTurma} />
                <div className="contentAtividade">
                    <ListaAtividadeAluno tituloAtividade={tituloAtividade} />
                </div>
            </div>
        </div>
    </>
}

export default PageSelecionarAtividade;