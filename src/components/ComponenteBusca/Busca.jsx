import React from "react";
import { IoIosSearch } from "react-icons/io";
import './Busca.css';

const Busca = ({ isClass, gerarAtividade, nomeAluno, isTurmaRelatorio, nomeTurma, nomeAtividade, isTurma, abrirTurma }) => {
    
    const messageBusca = () => {
        if(nomeAluno){
            return <p>{nomeAluno}</p>;
        }else if(nomeTurma){
            return <p>{nomeTurma}</p>;
        }else if(nomeAtividade){
            return <p>{nomeAtividade}</p>;
        }else{
            return <p>TURMAS :</p>
        }
    }

    return <div className={isTurmaRelatorio ? 'buscaT' : 'busca'}>
        <div className="buscador">
            <IoIosSearch size={25} />
            <input type="text" />
        </div>
        <div className="contentBusca">
            {messageBusca()}
            {isClass && <input type="submit" value="CRIAR EXERCÍCIO" onClick={gerarAtividade} />}
            {isTurma && <input type="submit" value="ENTRAR NA TURMA" onClick={abrirTurma} />}
            {isTurmaRelatorio && <div className="turmaRelatorio">
                <input type="submit" value="EXCLUIR TURMA" id="excluirTurma" />
                <input type="submit" value="ADICIONAR ALUNO" />
            </div>}
        </div>
    </div>
}

export default Busca;