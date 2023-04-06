import { Element } from 'react-scroll';
import { useInView } from 'react-intersection-observer';
import github from '../assets/github_logo.svg';
import linkedin from '../assets/linkedin_logo.svg';
import email from '../assets/email_icon.svg';

export default function Contact(){

  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger the transition when the component is 50% visible
  });


  return(
    <Element name="contact">
      <div ref={ref} className={`flex flex-row justify-center items-center h-screen space-x-12 ${inView ? 'opacity-100 fadeinfast' : 'opacity-0'}`}>
      <div className='flex flex-col items-center w-1/2'>
        <h2 className='font-bold italic text-5xl'>Let's Chat!</h2>
        <br></br>
        <p className='text-lg text-center'>I am currently
          <span className='text-indigo-800 font-bold'> seeking new opportunities </span>
        and would love to hear from you. Please feel free to reach out to me via email or LinkedIn with any questions or to start a conversation. I look forward to connecting with you soon!
        </p>

        <br></br>
        <div className='flex flex-row space-x-6'>
          <a href='https://github.com/hbernie' target="_blank"><img src={github}></img></a>
          <a href='mailto:hbern00@gmail.com' target="_blank"><img src={email}></img></a>
          <a href='https://www.linkedin.com/in/bernstein-hannah/' target="_blank"><img src={linkedin}></img></a>
        </div>
      </div>
      </div>
    </Element>
  )
}