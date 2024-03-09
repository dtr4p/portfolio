
import './App.css';
import Navbar from './Componentes/sections/Navbar';
import Presentation from './Componentes/sections/Presentation'
import Skills from './Componentes/sections/Skills'
import Projects from './Componentes/sections/Projects'
import Footer from './Componentes/sections/Footer';

function App() {
  return (
    <div className="App">
          <Navbar/>
          <Presentation/><br/>
          <Skills/><br/>
          <Projects/>
          <Footer/>
    </div>
  );
}

export default App;
