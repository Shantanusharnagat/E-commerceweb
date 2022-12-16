
import './App.css';
import Display from './components/Display';
import Featured from './components/Featured';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';
import Servs from './components/Servs';
import Testinomials from './components/Testinomials';
import Tshirts from './components/Tshirts';
import Designers from './components/Designers';

function App() {
  return (
    <div className="App">
      <section className='bg'>
      <Navbar/>
      <Display/>
      </section>
      <Servs/>
      <Gallery/>
      <Featured/>
      <Tshirts/>
      <div className='btndiv'><button className='btnshop'>Shop Now</button></div>
      <Testinomials/>
      <Designers/>
      
    </div>
  );
}

export default App;
