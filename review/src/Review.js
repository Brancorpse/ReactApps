import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 
'react-icons/fa';

// criando e exportando componente review
const Review = () => {
    const [index,setIndex] =useState (0);
    const {name, job, image, text} = people[index];

    //criando função para controlar a navegação do componente
    const checkNumber = (number) => {
        if (number > people.length -1 ) {
            return 0;
        }
        if (number < 0) {
            return people.length -1;
        }
        return number;
    };

    // criando função para navegação para próximo item dos dados
    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index +1;
            return checkNumber(newIndex);
        });
    };

    // criando função para ir para dado anterior do componente
    const prePerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    };

    // criando função para botão surpreenda-me
    const randomPerson = () => {
        let randomNumber = Math.floor (Math.random() * people.length); 
        if (randomNumber === index) {
            randomNumber = index +  1;
        }
        setIndex(checkNumber(randomNumber));   
            
    };

    // retornando componente para o app principal
    return (
        <article className='review'>
            <div className='img-container'>
                <img src={image} alt={name} className='person-img' />
                <span className='quote-icon'>
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div className='button-container'>
                <button className='prev-btn' onClick={prePerson}>
                    <FaChevronLeft />
                </button>
                <button className='next-btn' onClick={nextPerson}>
                    <FaChevronRight />
                </button>           

            </div>
            <button className='random-btn' onClick={randomPerson}>supreanda-me</button>             
        </article>
    );    

};

export default Review;





