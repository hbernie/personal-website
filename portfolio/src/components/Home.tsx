import React, { useEffect } from 'react'
import { Element } from 'react-scroll';

export default function Home(){

  useEffect(() => {
    let style1 = document.createElement("style")
    let style2 = document.createElement("style")
    let after = document.getElementById("after-te1")
    let before = document.getElementById("before-te1")
    const setKeyframesRules = (n:number, start = 0) => {
      let steps = ""
      for (let i = start; i <= n; i++) {
        let percent = (i / n) * 100
        let random1 = `${Math.random()*150}px`
        let random2 = `${Math.random()*150}px`
        steps = steps.concat(`${percent}% { clip: rect(${random1}, 9999px, ${random2}, 0) } `)
      }
      return steps
    }
    let keyframes1 = `@keyframes glitch-anim-1 { ${setKeyframesRules(24)} }`
    let keyframes2 = `@keyframes glitch-anim-2 { ${setKeyframesRules(32, 2)} }`
    style1.innerHTML = keyframes1
    style2.innerHTML = keyframes2
    after!.appendChild(style1)
    before!.appendChild(style2)
    after!.style.animation = "glitch-anim-1 2.5s infinite linear alternate-reverse"
    before!.style.animation = "glitch-anim-2 3s infinite linear alternate-reverse"
  }, [])


  return(
    <Element name="home">
      <div className="flex flex-col justify-center items-center w-full h-[60vh] fadein">
        <h1 className=" flex flex-col text-black text-7xl font-bold relative inline-block">
          <span id="before-te1" className="absolute top-0 left-0.5 w-full h-full bg-transparent" style={{ textShadow: "-2px 0 #49FC00", clipPath: "rect(24px, 550px, 90px, 0)" }} aria-hidden="true">Hey, I'm Hannah.</span> {/* glitch::before */}
          Hey, I'm Hannah.
          <span id="after-te1" className="absolute top-0 -left-0.5 w-full h-full bg-transparent" style={{ textShadow: "-2px 0 spin(#49FC00, 180)", clipPath: "rect(85px, 550px, 140px, 0)" }} aria-hidden="true">Hey, I'm Hannah.</span> {/* glitch::after */}
        </h1>
        <div className='text-xl font-bold text-indigo-800'>
          <h2>software engineer & pretty cool gal.</h2>
        </div>
      </div>
    </Element>
  )
}