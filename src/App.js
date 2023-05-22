import NavBar from './components/NavBar';
import Hero from './components/Hero';
import BreakOne from './components/BreakOne';
import BreakTwo from './components/BreakTwo';
import Journey from './components/Journey';
import Skills from './components/Skills';
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
    </div>
  );
}

export default App;
