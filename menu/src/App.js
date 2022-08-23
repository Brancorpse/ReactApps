import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['todos', ...new Set(items.map((item) => item.category))];


/* Configurando componente na tela principal */

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  /* função para filtrar itens no menu */
  const filterItems = (category) => {
    if (category === 'todos') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);

  };

  /* Apresentando tela principal */

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Nosso Menu</h2>
          <div className="underline"></div>        
        </div>      
        <Categories categories={categories} filterItems={filterItems} /> 
        <Menu items={menuItems} />  
      </section>
    </main>    
  );
  
};

export default App;
