import React from 'react';
import "./intro.css";
import bg from "./Bgi.png";
import { Link } from 'react-scroll';
import lock from "./lock.jpg";
import {motion} from 'framer-motion';

const Intro = () => {
  return (
    <section id='intro'>
        <motion.div style={{ x:25 }} animate={{ x: 10, y:-10 }} className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Ramu Valliappan</span><br />Website Developer</span>
            <p className='introPara'>I am a Full-stack web developer with experience in React JavaScript, <br />  Vue JavaScript, Python, MySQL</p>
            <Link><button className='btn'><img src={lock} alt='btnImg' className='btnImg'/>Hire me</button></Link>
        </motion.div>
        <motion.img initial={true} animate={{ x: 100, y: -50 }} src={bg} alt='' className='bg'></motion.img>
    </section>
  )
}

export default Intro