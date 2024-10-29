import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import PageAtividade from './pages/PageAtividade';
import PageRelatorio from './pages/PageRelatorio';
import PageGerarAtividade from './pages/PageGerarAtividade';
import PageRelatorioTurma from './pages/PageRelatorioTurma';
import PageHomeAlunos from './pages/PageHomeAlunos';
import PagePendentes from './pages/PagePendentes';
import PagePendenteTurma from './pages/PagePendentesTurma';
import PageAlunosDevedores from './pages/PageAlunosDevendo';
import PageLogin from './pages/PageLogin';
import PageCadastro from './pages/PageCadastro';
import PageSelecionarAtividade from './pages/PageSelecionarAtividade';
import PageEscolha from './pages/PageEscolha';
import PageConfiguracao from './pages/PageConfiguracao';
import PageResolucoes from './pages/PageResolucoes';
import PageSelecionarResolucao from './pages/PageSelecionarResolucao';
import PageRelatorioResolucao from './pages/PageRelatorioResolucao';
import PageHomeProfessor from './pages/PageHomeProfessor';
import PageHome from './pages/PageHome';
import ProfessorRoutes from './routes/ProfessorRoutes';
import PageLogout from './pages/PageLogout';
import AlunoRoutes from './routes/AlunoRoutes';


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Router>

      <Routes>

        {/* Rotas do públicas */}
        <Route path='/' element={<PageHome />} />
        <Route path='/login' element={<PageLogin />} />
        <Route path='/cadastro' element={<PageCadastro />} />
        <Route path='/escolha' element={<PageEscolha />} />
        <Route path='/logout' element={<PageLogout />} />

        {/* Rotas do professor */}
        <Route path='/professor/*' element={<ProfessorRoutes />} />

        {/* Rotas do aluno */}
        <Route path='/aluno/*' element={<AlunoRoutes />} />

      </Routes>

    </Router>
  </StrictMode>
)
