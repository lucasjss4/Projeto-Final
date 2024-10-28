import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        {/* Rotas do públicas */}
        <Route path='/' element={<PageHome />} />
        <Route path='/login' element={<PageLogin />} />
        <Route path='/cadastro' element={<PageCadastro />} />
        <Route path='/escolha' element={<PageEscolha />} />

        {/* Rotas do professor */}
        <Route path='/professor' element={<PageHomeProfessor />} />
        <Route path='/relatorio/:nome' element={<PageRelatorio />} />
        <Route path='/turma/:nomeTurma' element={<PageGerarAtividade />} />
        <Route path='/:nomeTurma' element={<PageSelecionarAtividade />} />
        <Route path='/turma/relatorio/:nomeAtividade' element={<PageRelatorioTurma />} />
        <Route path='/pendentes' element={<PagePendentes />} />
        <Route path='/pendentes/:nome' element={<PagePendenteTurma />} />
        <Route path='/pendentes/:nome/alunos' element={<PageAlunosDevedores />} />

        {/* Rotas do aluno */}
        <Route path='/aluno' element={<PageHomeAlunos />} />
        <Route path='/configuracao' element={<PageConfiguracao />} />
        <Route path='/resolucoes' element={<PageResolucoes />} />
        <Route path='/resolucoes/:nome' element={<PageSelecionarResolucao />} />
        <Route path='/resolucoes/relatorio/:nome' element={<PageRelatorioResolucao />} />
        <Route path='/atividade' element={<PageAtividade />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>
)
