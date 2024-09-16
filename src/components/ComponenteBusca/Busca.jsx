import React from "react";
import { IoIosSearch } from "react-icons/io";
import './style.css';

const Busca = () => {
    return <div className="busca">
        <div className="buscador">
             <IoIosSearch size={25}/>
             <input type="text" />
        </div>
        <div className="contentBusca">
            <p>TURMAS:</p>
            <input type="submit" value="CRIAR EXERCÍCIO" />
        </div>
    </div>
}

export default Busca;