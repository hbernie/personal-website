import { useState } from 'react'
// import '../index.css'

export default function NavBar() {
  return(
  <div className='navbar'>
    
    <div>Hi</div>
    <div className='flex items-center justify-between py-3 md:py-5 md:block text-white'>
      <div>About</div>
      <div>Projects</div>
      <div>Resume</div>
      <div>Contact</div>
    </div>
  </div>
  )
}