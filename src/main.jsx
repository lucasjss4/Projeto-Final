import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import PageAtividade from './pages/PageAtividade';
import PageHome from './pages/PageHome';
import PageRelatorio from './pages/PageRelatorio';
import PageGerarAtividade from './pages/PageGerarAtividade';
import PageRelatorioTurma from './pages/PageRelatorioTurma';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/atividade' element={<PageAtividade />} />
        <Route path='/' element={<PageHome />} />
        <Route path='/relatorio/:nome' element={<PageRelatorio />} />
        <Route path='/turma/:nomeTurma' element={<PageGerarAtividade />} />
        <Route path='/turma/relatorio/:nomeAtividade' element={<PageRelatorioTurma />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
