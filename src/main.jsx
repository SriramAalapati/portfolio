import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import IntroAnimate from './components/IntroAnimate';
import Navbar from './components/Navbar';

import Home from './components/Home'
import Educaton from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Home />
    <Educaton />
    <Skills />
    <Projects/>
    <Contact/>
  </StrictMode>
)
