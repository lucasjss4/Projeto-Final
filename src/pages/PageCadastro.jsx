import React from "react";
import Login from "../components/ComponenteLogin/Login";
import logo from '../assets/logo.png'

const PageCadastro = () => {

    const cadastro = "CRIE UMA CONTA";
    
    return <>
        <div className="img" style={{marginLeft : '25px', marginTop : '25px' }}>
            <img src={logo} style={{width: '70px'}} /> 
        </div>
        <Login cadastro={cadastro} termo={true} />
    </>
}

export default PageCadastro;