import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from './components/About';
function App() {
  return (
    <div className="App">
    <Navbar/>
    
   <Home />
   <About/>
   <Skills />
   <Projects />
    <Contact />
    
</div>

  );
}

export default App;
