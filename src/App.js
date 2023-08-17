
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Qualifications from './components/Qualification/Qualifications';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollUp from './components/Scrollup/ScrollUp';
function App() {
  return (
    <div className="App">
    <Header />
    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Qualifications />
      <Projects />
      <Contact />
    
    </main>
    <Footer /> 
    <ScrollUp />
    </div>
  );
}

export default App;
