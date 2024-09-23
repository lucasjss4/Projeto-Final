import React from "react";
import { BsGraphUp } from "react-icons/bs";
import { FaPencilAlt } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import './Turma.css';


const Turma = () => {

    const redirecionarTurma = () => {
        window.location.href = '/turma/' + nomeTurma;
    }

    const nomeTurma = 'DS-PRO';

    return <div className="containerTurma" onClick={redirecionarTurma}>
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
                    <HiUserGroup  size={20}/>
                </div>
                <BsGraphUp size={20} />
            </div>
        </div>
    </div>
}

export default Turma;