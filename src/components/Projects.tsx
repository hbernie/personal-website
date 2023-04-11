import { Element } from 'react-scroll';
import { useInView } from 'react-intersection-observer';
import latchql from '../assets/latchql.png';
import trivia from '../assets/trivia.png';

export default function Projects(){

  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger the transition when the component is 50% visible
  });


  return(
    <Element name="projects">
     <div ref={ref} className={`flex flex-col justify-center items-center h-screen space-x-12 ${inView ? 'opacity-100 fadeinfast' : 'opacity-0'}`}>
      <div className='flex flex-col w-2/3'>
        <h2 className='font-bold italic text-5xl'>Featured Projects</h2>
        <hr className='border-1 border-black'></hr>
        <br></br>
      </div>

        <h2 className='font-bold'>LatchQL</h2>
        <img src={latchql} className='w-1/3 h-auto'></img>

        <br></br>

      <h2 className='border-2'>What in the World?</h2>
      <img src={trivia} className='w-1/3 h-auto'></img>

      <br></br>

      <h2 className='border-2'>Meet Me At the Spot</h2>

      <h2 className='border-2'>Some static websites: LatchQL Landing Page + Portfolio Website</h2>
      </div>
    </Element>
  )
}