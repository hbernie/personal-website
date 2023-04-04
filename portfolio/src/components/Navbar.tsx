import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import resume from '../assets/Resume.pdf';
import { Link } from 'react-scroll';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <nav className='flex justify-between items-center p-4 fadein'>
      <div className='flex self-start mt-3'>
        <img
          src={logo}
          className="w-16 h-16 ml-2 mt-2 cursor-pointer"
        />
        <div>
          <iframe src="https://open.spotify.com/embed/playlist/0QbY0ZiC20uY3XhkDGTCun?utm_source=generator&theme=0" width="100%" height="100" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      </div>

      {/* Hamburger menu button */}
      <button
        className="lg:hidden flex items-center px-3 py-2 border rounded text-indigo-800 border-indigo-800 hover:text-indigo-900 hover:bg-white mt-4 mr-4"
        onClick={handleMenuToggle}
      >
        <svg
          className="h-4 w-4 fill-current"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path
            fillRule="evenodd"
            d="M2 4h16a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z"
          />
        </svg>
      </button>

      {/* Nav links */}
      <div
        className={`mb-9 text-sm ${
          isMenuOpen ? 'block' : 'hidden'
        } lg:flex lg:items-center lg:w-auto`}
      >
        <h2 className='mr-9 hover-underline-animation cursor-pointer'>
          <Link to="about" smooth>
            About
          </Link>
        </h2>
        <h2 className='mr-9 hover-underline-animation cursor-pointer'>
          <Link to="projects" smooth>
            Projects
          </Link>
        </h2>
        <h2 className='mr-9 hover-underline-animation cursor-pointer'>
          <Link to="contact" smooth>
          Contact
          </Link>
        </h2>
        <h2 className='mr-5'>
          <a href={resume} download="hannahbernstein_resume" className="inline-block px-4 py-2 leading-none border rounded text-indigo-800 border-indigo-800 hover:border-transparent hover:text-indigo-900 hover:bg-white mt-4 lg:mt-0">Download Resume</a>
        </h2>
      </div>
    </nav>
  );
}

