import React, { useState } from "react";
import Header from "../components/ComponenteHeader/header";
import Menu from "../components/ComponenteMenu/Menu";
import Configuracao from "../components/ComponenteConfiguracao/Configuracao";

const PageConfiguracao = () => {
    const [isSideBarOpen, setSideBarOpen] = useState(false);

    const toggleSideBar = () => {
        setSideBarOpen(prevState => !prevState);
    }

    const config = true;

    const professorOuAluno = localStorage.getItem('ProfessorOrAluno');

    const sairDaPagina = () => {
        if(professorOuAluno === 'aluno'){
            window.location.href = '/aluno/home';
        }else if(professorOuAluno === 'professor'){
            window.location.href = '/professor/home';
        }
    }
    
    return <>
        <Header toggleSideBar={toggleSideBar} config={config} sairDaPagina={sairDaPagina} />
        <div className="container">
            <Menu isOpen={isSideBarOpen} />
            <div className="content">
                <Configuracao />
            </div>
        </div>
    </>
}

export default PageConfiguracao;