import { useState } from 'react'
import logo from '../assets/logo.png';
import resume from '../assets/Resume.pdf';

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return(
    <nav className="flex items-center justify-between flex-wrap p-4"> 
      <img
        src={logo}
        className="w-14 h-14"
      />
      {/* <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-indigo-900 hover:text-white ml-4">
            About
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-indigo-900 hover:text-white ml-4">
            Projects
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-indigo-900 hover:text-white ml-4">
            Contact
          </a>
  </div> */}
        <div>
          <a href={resume} download="hannahbernstein_resume" className="inline-block text-sm px-4 py-2 leading-none border rounded text-indigo-800 border-white hover:border-transparent hover:text-indigo-900 hover:bg-white mt-4 lg:mt-0">Download Resume</a>
        </div>
      {/* </div> */}
    </nav>
  )
}