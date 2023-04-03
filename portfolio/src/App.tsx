import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Blob from './components/Blob';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import logo from './assets/logo.png';

export default function App() {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLogo(false);
    }, 2000);
  }, []);

  return (
    <div className='h-screen'>
      {showLogo ? 
      <div className='flex h-screen items-center justify-center'>
        <img className='w-1/6 h-auto animate-pulse' src={logo} />
      </div>
      : <><Navbar /><Home /><Blob /><About /><Projects /><Contact /></>}
    </div>
  )
}
