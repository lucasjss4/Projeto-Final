import React from "react";
import logo from '../assets/logo.png'
import { FaGoogle } from "react-icons/fa";
import Login from "../components/ComponenteLogin/Login";


const PageLogin = () => {
    
    const login = "ENTRE OU CRIE UMA CONTA";

    return <>
        <div className="img" style={{marginLeft : '25px', marginTop : '25px' }}>
            <img src={logo} style={{width: '70px'}} /> 
        </div>
        <Login login={login} />
    </>
}

export default PageLogin;