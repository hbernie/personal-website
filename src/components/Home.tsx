import React, { useEffect } from 'react'
import { Element } from 'react-scroll';
import glitchEffect from '../hooks/glitch';


export default function Home(){
  glitchEffect();

  return(
    <Element name="home">
      <div className="flex flex-col justify-center items-center w-full h-[70vh] fadein">
        <h1 className=" flex flex-col text-black text-7xl font-bold relative inline-block">
          <span id="before-te1" className="absolute top-0 left-0.5 w-full h-full bg-transparent" style={{ textShadow: "-2px 0 #49FC00", clipPath: "rect(24px, 550px, 90px, 0)" }} aria-hidden="true">Hey, I'm Hannah.</span> {/* glitch::before */}
          Hey, I'm Hannah.
          <span id="after-te1" className="absolute top-0 -left-0.5 w-full h-full bg-transparent" style={{ textShadow: "-2px 0 spin(#49FC00, 180)", clipPath: "rect(85px, 550px, 140px, 0)" }} aria-hidden="true">Hey, I'm Hannah.</span> {/* glitch::after */}
        </h1>
        <div className='text-xl font-bold text-indigo-800'>
          <h2>software engineer & human.</h2>
        </div>
      </div>
    </Element>
  )
}