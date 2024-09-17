import React from "react";
import { IoIosSearch } from "react-icons/io";
import './style.css';

const Busca = ({isClass, gerarAtividade}) => {
    return <div className="busca">
        <div className="buscador">
             <IoIosSearch size={25}/>
             <input type="text" />
        </div>
        <div className="contentBusca">
            <p>TURMAS:</p>
            {isClass && <input type="submit" value="CRIAR EXERCÍCIO" onClick={gerarAtividade} />}
        </div>
    </div>
}

export default Busca;