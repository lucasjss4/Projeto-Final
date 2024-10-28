import React, { useState } from "react";
import Header from "../components/ComponenteHeader/header";
import Menu from "../components/ComponenteMenu/Menu";
import Busca from "../components/ComponenteBusca/Busca";
import FormCriarExercicio from "../components/ComponenteCriarExercicio/formCriarExecicio";
import { useParams } from "react-router-dom";
import ListaAtividadeAluno from "../components/ComponenteListaAtividadeAluno/ListaAtividadeAluno";
import ListaResolucao from "../components/ComponenteListaResolucao/ListaResolucao";

const PageSelecionarResolucao = () => {

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
    const tituloAtividade1 = "Atividade de aprendizado - Outras Atividades";

    return <>
        <Header toggleSideBar={toggleSideBar} isTeacher={isTeacher} />
        <div className="container">
            <Menu isOpen={isSideBarOpen} />
            <div className="content">
                <Busca nomeTurma={nomeTurma} />
                <div className="contentAtividade">
                    <ListaResolucao tituloAtividade={tituloAtividade} />
                    <ListaResolucao tituloAtividade={tituloAtividade1} />
                    <ListaResolucao tituloAtividade={tituloAtividade1} />
                    <ListaResolucao tituloAtividade={tituloAtividade1} />
                </div>
            </div>
        </div>
    </>
}

export default PageSelecionarResolucao;