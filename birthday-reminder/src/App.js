import React, { useState } from 'react';
import data from './data';
import List from './List';
import list from './List';

// função App principal 

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className='container'>
        <h3>{people.length} aniversários hoje</h3>
        <List people ={people} />
        <button onClick={() => setPeople( [])}
        >limpar tudo</button>
      </section>
    </main>
  );
}

export default App;




