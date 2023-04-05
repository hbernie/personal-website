import { Element } from 'react-scroll';
import { useInView } from 'react-intersection-observer';

export default function Projects(){

  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger the transition when the component is 50% visible
  });


  return(
    <Element name="projects">
     <div ref={ref} className={`flex flex-row justify-center items-center h-screen space-x-12 ${inView ? 'opacity-100 fadeinfast' : 'opacity-0'}`}>
      <div className='flex flex-col w-2/3'>
        <h2 className='font-bold italic text-5xl'>Some things that I've built</h2>
        <hr className='border-1 border-black'></hr>
        <br></br>
      </div>
      </div>
    </Element>
  )
}