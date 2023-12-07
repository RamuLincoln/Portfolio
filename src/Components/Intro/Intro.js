import React from 'react';
import "./intro.css";
import bg from "./Bgi.png";
import { Link } from 'react-scroll';
import lock from "./lock.jpg";

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Ramu Valliappan</span><br />Website Developer</span>
            <p className='introPara'>I am a Full-stack web developer with experience in React JavaScript, <br />  Vue JavaScript, Python, MySQL</p>
            <Link><button className='btn'><img src={lock} alt='btnImg' className='btnImg'/>Hire me</button></Link>
        </div>
        <img src={bg} alt='' className='bg'></img>
    </section>
  )
}

export default Intro