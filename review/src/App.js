import logo from './logo.svg';
import Review from './Review';
import {FaGithubSquare} from 'react-icons/fa';
import './App.css';

function App() {
  return (


      <main>
      <section className='container'>
        <div className='title'>
          <h2>nossos reviews</h2>
          <div className='underline'></div>
        </div>
        <Review />
      </section>
    </main>

  );

}

export default App;
