import React from "react";
import { IoIosSearch } from "react-icons/io";
import './Busca.css';

const Busca = ({ isClass, gerarAtividade, nomeAluno, isTurmaRelatorio, nomeTurma, nomeAtividade, isTurma, abrirTurma, openAddStudent, nome }) => {
    //Todas as propriedades são para inserir botões ou retirar depende de onde está vindo ele
    
    //Essa função faz a troca das mensagens que ficam no componente, todas as opçoes ficam na mesma posição
    const messageBusca = () => {
        if(nomeAluno){
            return <p>{nomeAluno}</p>;
        }else if(nomeTurma){
            return <p>{nomeTurma}</p>;
        }else if(nomeAtividade){
            return <p>{nomeAtividade}</p>;
        }else if(nome === 'resolucoes'){
            return <p id="resolucoes">RESOLUÇÕES :</p>
        }else{
            return <p>TURMAS :</p>
        }
    }

    // Esse componente renderiza o campo de busca, que pode conter vários botões que ficam ocultos dependendo das telas
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
                <input type="submit" value="ADICIONAR ALUNO" onClick={openAddStudent} />
            </div>}
        </div>
    </div>
}

export default Busca;