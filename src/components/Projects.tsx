import { Element } from 'react-scroll';
import { useInView } from 'react-intersection-observer';
import latchql from '../assets/latchql.png';
import trivia from '../assets/trivia.png';
import spot from '../assets/spot.png';

export default function Projects(){

  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger the transition when the component is 50% visible
  });


  return(
    <Element name="projects">
     <div ref={ref} className={`flex flex-col justify-center items-center h-screen ${inView ? 'opacity-100 fadeinfast' : 'opacity-0'}`}>
      <div className='flex flex-col w-2/3'>
        <h2 className='font-bold italic text-5xl'>Featured Projects</h2>
        <hr className='border-1 border-black'></hr>
        <br></br>
      </div>

    <div className='w-2/3'>
      <div className='flex flex-row'>
        <div className='flex flex-col justify-center w-2/3'>
          <p className='text-lg font-bold'>LatchQL</p>
          <p className='w-5/6'>An open source, npm middleware package that adds additional layers of security with customizable configuration for role-based authorization of GraphQL APIs.</p>
          <h3 className='text-sm mt-3 text-indigo-800'>GraphQL, React, TypeScript, Node, Express, Redis, JWT</h3>
        </div>
        <a className='w-1/2 h-1/2 hover:scale-125 transition-all duration-500 rounded-md' href='https://www.npmjs.com/package/latchql' target='_blank'><img src={latchql}></img></a>
      </div>

        <br></br>

        <div className='flex flex-row mt-3'>
        <a className='w-1/2 h-1/2 hover:scale-125 transition-all duration-500 rounded-md' href='https://github.com/AlpsCo/WhatInTheWorld' target='_blank'>[photo coming soon]</a>
        <div className='flex flex-col justify-center ml-12'>
          <p className='text-lg font-bold'>What in the World?</p>
          <p>A geography, trivia, "edutainment" game.</p>
          <h3 className='text-sm mt-3 text-indigo-800'>React, JavaScript, PostgreSQL, Node, Express</h3>
        </div>
      </div>

      <br></br>

      <div className='flex flex-row mt-3'>
        <div className='flex flex-col justify-center'>
          <p className='text-lg font-bold'>The Spot</p>
          <p className='w-5/6'>A social media app to publicly or privately share and store your favorite locations.</p>
          <h3 className='text-sm mt-3 text-indigo-800'>React, PostgreSQL, Node, Express, TailwindCSS, Google Maps API</h3>
        </div>
        <a className='w-1/2 h-1/2 hover:scale-125 transition-all duration-500 rounded-md' href='https://github.com/MeetmeattheSpot/Meet-me-at-the-Spot/tree/dev' target='_blank'><img src={spot} ></img></a>
      </div>

      {/* <h2 className='border-2'>Some static websites: LatchQL Landing Page + Portfolio Website</h2> */}
      </div>
      </div>
    </Element>
  )
}