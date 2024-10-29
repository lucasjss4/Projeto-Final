import React from "react";
import { BsGraphUp } from "react-icons/bs";
import { FaPencilAlt } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import './Turma.css';
import { Navigate } from "react-router-dom";


const Turma = ({ isAluno, isResolucoes }) => {

    const aluno = true;
    const alunoF = false;

    const redirecionarTurma = () => {

        if (isAluno) {
            window.location.href = '/aluno/selecionar/atividade/' + nomeTurma;
        } else {
           window.location.href = '/professor/turma/' + nomeTurma;
        }
    }

    const acessarResolucoes = () => {
        window.location.href = '/aluno/resolucoes/' + nomeTurma;
    }

    const nomeTurma = 'DS-PRO';

    return <div className="containerTurma" onClick={isResolucoes ? acessarResolucoes  : redirecionarTurma}>
        <div className="titleTurma">
            <p>{nomeTurma}</p>
        </div>
        <div className="descriptionTurma">
            <p id="teacher">Professor 01 : xxxxxxxx</p>
            <p id="activity">Atividade: Matemática</p>
        </div>
        <div className="iconsTurma">
            <div className="edit">
                <FaPencilAlt size={15} />
            </div>
            <div className="infoTurma">
                <div className="qtdPeople">
                    <p>27/30</p>
                    <HiUserGroup size={20} />
                </div>
                <BsGraphUp size={20} />
            </div>
        </div>
    </div>
}

export default Turma;