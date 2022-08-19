import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

/* fez-se necessário instalar a biblioteca react icons de novo.
Talvez seja necessário baixar sempre */

/* retornando componente para o App principal */
const Question = ({title, info}) => {
    const [showInfo,setShowInfo] = useState(false);
    return (
    <article className='question'>
        <header>
            <h4>{title}</h4>
            <button className='btn' onClick={() => setShowInfo
            (!showInfo)}>
                {showInfo? <AiOutlineMinus/> : <AiOutlinePlus />}
                </button>
        </header>
        {showInfo && <p>{info}</p>}
        </article>
    );    
};

export default Question;