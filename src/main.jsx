import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/ComponenteHeader/header'
import FormCriarExercicio from './components/ComponenteForm/formCriarExecicio';
import Atividade from './components/ComponenteAtividade/Atividade';
import Relatorio from './components/ComponenteRelatorio/relatorio';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
  </StrictMode>
)
