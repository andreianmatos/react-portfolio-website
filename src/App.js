import './App.css';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Home />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
