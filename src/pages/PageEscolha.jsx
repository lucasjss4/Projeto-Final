import React from "react";
import logo from '../assets/logo.png'
import Login from "../components/ComponenteLogin/Login";
import EscolhaAlunoProfessor from "../components/ComponenteEscolha/EscolhaAlunoProfessor";


const PageEscolha = () => {
    return <>
        <div className="img" style={{marginLeft : '25px', marginTop : '25px' }}>
            <img src={logo} style={{width: '70px'}} /> 
        </div>
        <EscolhaAlunoProfessor />
    </>
}

export default PageEscolha;