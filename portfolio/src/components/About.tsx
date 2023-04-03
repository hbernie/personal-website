import { Element } from 'react-scroll';
import { useInView } from 'react-intersection-observer';

export default function About(){

  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger the transition when the component is 50% visible
  });

  return(
    <Element name="about">
      <div ref={ref} className={`flex justify-center items-center h-screen max-w-screen-lg mx-auto px-4 ${inView ? 'opacity-100 fadeinfast' : 'opacity-0'}`}>
        <h1 className="text-6xl">Get to know me.</h1>
        <p>Hey there, I'm Hannah Bernstein. I graduated from the University of Colorado Boulder (skooo buffs!!) with a degree in Computer Science and minors in Business and Religious Studies. I have a passion for</p>
      </div>
    </Element>
  )
}