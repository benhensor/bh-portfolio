import NavBar from './components/NavBar';
import Hero from './components/Hero';
import BreakOne from './components/BreakOne';
import BreakTwo from './components/BreakTwo';
import BreakThree from './components/BreakThree';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App () {

  return (
    <div className="App">
      <NavBar />
      <Hero />
      <BreakOne />  
      <Journey />
      <BreakTwo />
      <Skills />
      <BreakThree />
      <Projects />

    </div>
  );
}

export default App;
