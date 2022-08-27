import React, { useState, useEffect } from 'react';
import data from './data';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';

/* Criando página principal */

function App() {
  /* Add constante para carregar dados */
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  /* função para deixar o array não zerar e deixar a tela em branco */

  useEffect(() => {
    const lasIndex = people.length -1;
    if(index < 0) {
      setIndex(lasIndex);
      

    }
    if (index > lasIndex) {
      setIndex(0);
    }
  }, [index, people]);  

  useEffect(() => {
    let slider = setInterval(() =>{
      setIndex(index +1)
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  /* retornando componente principal */

  return (  

    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>            
      <div className='section-center'>
        {people.map((person, personIndex) => {
          const {id, image, name, title, quote} = person;
          let position = 'nextSlide';
          if(personIndex === index) {
            position= 'activeSlide';
          }
          if(personIndex === index -1 || 
            (index === 0 && personIndex === people.length -1)) {
            position = 'lastSlide';

          }

          return (
          <article className= {position} key={id}>
            <img src={image} alt={name} className='person-img' />
            <h4>{name}</h4>
            <p className='title'> {title}</p>
            <p className='text'>{quote}</p>
            <br></br><br></br>
            <FaQuoteRight className='icon' />

          </article>
          );

        })}
        

        <button className='prev' onClick={() => setIndex(index-1)}>
          <FiChevronLeft />
        </button>
        <button className='next'onClick={() => setIndex(index+1)}>
          <FiChevronRight />
        </button>   

      </div>
    </section>  

  );
}

export default App;
