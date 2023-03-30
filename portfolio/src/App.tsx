import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Blob from './components/Blob';

export default function App() {

  return (
    <div className='h-screen'>
      
      <Navbar />
      <Home />
      <Blob />
    </div>
  )
}
