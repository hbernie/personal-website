import { useEffect } from "react"

export default function glitchEffect(){
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
}