import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/ComponenteHeader/header'
import PageAtividade from './pages/PageAtividade';
import Busca from './components/ComponenteBusca/Busca';
import PageHome from './pages/PageHome';
import FormCriarTurma from './components/ComponenteTurma/FormCriarTurma';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter>
      <Routes>
        <Route path='/atividade' element={<PageAtividade />} />
      </Routes>
    </BrowserRouter> */}
      <PageHome />
  </StrictMode>
)
