import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Blob from './components/Blob';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className='h-screen'>
      <Navbar />
      <Home />
      <Blob />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}
