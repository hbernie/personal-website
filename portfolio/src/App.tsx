import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import Navbar from './components/Navbar';

function App() {

  return (
    <><Navbar />
    <div className="">
      <h1 id='logo'>Hi, I'm Hannah.</h1>
      <div className="card">
        <p>
          I am a cat mom first, and a fullstack software engineer second. 
        </p>
      </div>
    </div></>
  )
}

export default App
