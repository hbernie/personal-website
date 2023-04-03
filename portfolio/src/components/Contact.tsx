import { Element } from 'react-scroll';
import { useInView } from 'react-intersection-observer';

export default function Contact(){

  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger the transition when the component is 50% visible
  });


  return(
    <Element name="contact">
      <div className="flex justify-center flex-col items-center h-screen">
        <h1 ref={ref} className={`text-6xl ${inView ? 'opacity-100 fadeinfast' : 'opacity-0'}`}>Contact me</h1>
      </div>
    </Element>
  )
}