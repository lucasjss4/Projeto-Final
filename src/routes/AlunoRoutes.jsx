import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PageHomeAlunos from "../pages/PageHomeAlunos";
import PageConfiguracao from "../pages/PageConfiguracao";
import PageResolucoes from "../pages/PageResolucoes";
import PageSelecionarResolucao from "../pages/PageSelecionarResolucao";
import PageRelatorioResolucao from "../pages/PageRelatorioResolucao";
import PageAtividade from "../pages/PageAtividade";
import PageSelecionarAtividade from "../pages/PageSelecionarAtividade";
import PagePendenteAluno from "../pages/PagePendenteAluno";

const AlunoRoutes = () => {

    const [aluno, setAluno] = useState(false);
    const [isEmail, setEmail] = useState(false);
    const [loading, setLoagding] = useState(true);

    useEffect(() => {

        const ProfessorOrAluno = localStorage.getItem('ProfessorOrAluno');
        const email = localStorage.getItem('email');

        setAluno(ProfessorOrAluno === 'aluno');
        setEmail(email !== null && email !== '');
        setLoagding(false);
    }, []);

    if (loading) {
        return null;
    }

    if (!isEmail) {
        return <Navigate to="/login" />
    }

    if (!aluno) {
        return <Navigate to="/escolha" />
    }




    return (
        <Routes>
            <Route path='home' element={<PageHomeAlunos />} />
            <Route path='configuracao' element={<PageConfiguracao />} />
            <Route path='resolucoes' element={<PageResolucoes />} />
            <Route path='resolucoes/:nome' element={<PageSelecionarResolucao />} />
            <Route path='resolucoes/relatorio/:nome' element={<PageRelatorioResolucao />} />
            <Route path='atividade' element={<PageAtividade />} />
            <Route path='selecionar/atividade/:nomeTurma' element={<PageSelecionarAtividade />} />
            <Route path='pendentes' element={<PagePendenteAluno />} />
        </Routes>
    );
}

export default AlunoRoutes;