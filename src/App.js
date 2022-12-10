import './App.css';
import { useState } from 'react';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';

function checkViewport() { // do better, OR fix offset instead of setTimeOut
  var el, offset = -10, elements = ["Home","About","Services","Contact"]
  for(var n = 0; n < 4; n++){
      el = document.getElementById(elements[n]);
      if (!el) return false;
      const top = el.getBoundingClientRect().top+10;
      var answer = (top + offset) >= 0 && (top - offset) <= window.innerHeight;
      document.getElementsByClassName("row")[n].id = answer ? "active" : "";
  } 
}

function App() {
  window.addEventListener('scroll', checkViewport);
  return (
    <div className="App" >
      <Sidebar />
      <Home />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
