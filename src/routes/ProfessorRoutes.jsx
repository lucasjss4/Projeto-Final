import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PageHomeProfessor from "../pages/PageHomeProfessor";
import PageRelatorio from "../pages/PageRelatorio";
import PageGerarAtividade from "../pages/PageGerarAtividade";
import PageSelecionarAtividade from "../pages/PageSelecionarAtividade";
import PageRelatorioTurma from "../pages/PageRelatorioTurma";
import PagePendentes from "../pages/PagePendentes";
import PagePendenteTurma from "../pages/PagePendentesTurma";
import PageAlunosDevedores from "../pages/PageAlunosDevendo";
import PageConfiguracao from "../pages/PageConfiguracao";

const ProfessorRoutes = () => {

    const [professor, setProfessor] = useState(false);
    const [isEmail, setEmail] = useState(false);
    const [loading, setLoagding] = useState(true);

    useEffect(() => {

        const ProfessorOrAluno = localStorage.getItem('ProfessorOrAluno');
        const email = localStorage.getItem('email');

        console.log(email);
        console.log(email !== null && email !== '');

        setProfessor(ProfessorOrAluno === 'professor');
        setEmail(email !== null && email !== '');
        setLoagding(false);
    }, []);

    if (loading) {
        return null;
    }

    if (!isEmail) {
        console.log(isEmail);
        return <Navigate to="/login" />
    }

    if (!professor) {
        return <Navigate to="/escolha" />
    }




    return (
        <Routes>
            <Route path='home' element={<PageHomeProfessor />} />
            <Route path='relatorio/:nome' element={<PageRelatorio />} />
            <Route path='turma/:nome' element={<PageGerarAtividade />} />
            <Route path=':nome' element={<PageSelecionarAtividade />} />
            <Route path='turma/relatorio/:nomeAtividade' element={<PageRelatorioTurma />} />
            <Route path='pendentes' element={<PagePendentes />} />
            <Route path='pendentes/:nome' element={<PagePendenteTurma />} />
            <Route path='pendentes/:nome/alunos' element={<PageAlunosDevedores />} />
            <Route path='/configuracao' element={<PageConfiguracao />} />
        </Routes>
    );
}

export default ProfessorRoutes;