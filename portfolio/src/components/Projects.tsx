import { Element } from 'react-scroll';
import { useInView } from 'react-intersection-observer';

export default function Projects(){

  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger the transition when the component is 50% visible
  });


  return(
    <Element name="projects">
      <div ref={ref} className={`flex justify-center flex-col items-center h-screen ${inView ? 'opacity-100 fadeinfast' : 'opacity-0'}`}>
        <h1 className="text-6xl">Projects</h1>
      </div>
    </Element>
  )
}