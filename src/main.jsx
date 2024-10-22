import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import PageAtividade from './pages/PageAtividade';
import PageHome from './pages/PageHome';
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


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/atividade' element={<PageAtividade />} />
        <Route path='/' element={<PageHome />} />
        <Route path='/relatorio/:nome' element={<PageRelatorio />} />
        <Route path='/turma/:nomeTurma' element={<PageGerarAtividade />} />
        <Route path='/:nomeTurma' element={<PageSelecionarAtividade />} />
        <Route path='/turma/relatorio/:nomeAtividade' element={<PageRelatorioTurma />} />
        <Route path='/aluno' element={<PageHomeAlunos />} />
        <Route path='/pendentes' element={<PagePendentes />} />
        <Route path='/pendentes/:nome' element={<PagePendenteTurma />} />
        <Route path='/pendentes/:nome/alunos' element={<PageAlunosDevedores />} />
        <Route path='/login' element={<PageLogin />} />
        <Route path='/cadastro' element={<PageCadastro />} />
        <Route path='/escolha' element={<PageEscolha />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
