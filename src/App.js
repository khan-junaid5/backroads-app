import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/NavBar';
import Services from './Components/Services'; 
import Tours from './Components/Tours';

function App() {
  return(
  <>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Tours/>
    <Footer/>
  </>
  );
}

export default App;
