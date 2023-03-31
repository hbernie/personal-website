import { useState } from 'react'
import logo from '../assets/logo.png';
import resume from '../assets/Resume.pdf';

export default function NavBar() {
  return(
    <nav className="flex justify-between items-center p-4">
      <div className='self-start'>
      <img
        src={logo}
        className="w-14 h-14 ml-2"
      />
      </div> 

      <div className='flex items-center'>
        <h2 className='mr-9'>About</h2>
        <h2 className='mr-9'>Projects</h2>
        <h2 className='mr-9'>Contact</h2>
        <h2 className='mr-5'>
          <a href={resume} download="hannahbernstein_resume" className="inline-block px-4 py-2 leading-none border rounded text-indigo-800 border-indigo-800 hover:border-transparent hover:text-indigo-900 hover:bg-white mt-4 lg:mt-0">Download Resume</a>
        </h2>
      </div>
    </nav>
  )
}