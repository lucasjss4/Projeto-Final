import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/componenteHeader/header'
import FormCriarExercicio from './components/ComponenteForm/formCriarExecicio';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
  </StrictMode>
)
