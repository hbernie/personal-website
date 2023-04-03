import { Element } from 'react-scroll';
import { useInView } from 'react-intersection-observer';
import me from '../assets/me.png';

export default function About(){

  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger the transition when the component is 50% visible
  });

  return(
    <Element name="about">
      <div ref={ref} className={`flex flex-row justify-center items-center h-screen space-x-12 ${inView ? 'opacity-100 fadeinfast' : 'opacity-0'}`}>
        <div className='flex flex-col w-1/2'>
          <h1 className="text-6xl">Get to know me</h1>
          <hr className='border-1 border-black'></hr>
          <br></br>
          <p className='text-xl'>
          Hey there, I'm
          <span className='text-indigo-800 font-bold'> Hannah Bernstein! </span>
          I graduated from the University of Colorado Boulder (skooo buffs!!) with a degree in 
          <span className='text-indigo-800 font-bold'> Computer Science </span>
          and double minors in Business and Religious Studies. My love for art and design goes back as far as I can remember and has been a driving force in my career as a problem solver and creator of elegant software solutions. I'm excited to continue exploring the intersection of technology and creativity, and to use my skills to help make the digital world a more accessible and engaging place.
          </p>
          <br></br>
          <p className='text-xl'>When I'm not at the computer, you can find me snowboarding, attending concerts and festivals, squeezing my cat, and indulging my passion for food by pretending to be a world renowned food critic. </p>
          <br></br>
          <p className='text-xl'>Recently, I've been using the following technologies:</p>
          <br></br>
          <div className='flex flex-row space-x-12'>
            <ul className='text-xl'>
              <li>- JavaScript (ES6+)</li>
              <li>- TypeScript</li>
              <li>- Node.js/Express.js</li>
              <li>- TailwindCSS</li>
            </ul>
            <ul className='text-xl'>
              <li>- React</li>
              <li>- SQL Databases</li>
              <li>- MongoDB</li>
              <li>- GraphQL</li>
            </ul>
          </div>
          
        </div>
          <img src={me} className='w-24 h-auto cursor-pointer hover:animate-bounce'></img>
      </div>
    </Element>
  )
}