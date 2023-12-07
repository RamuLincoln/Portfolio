import React from 'react';
import './Skills.css';
import uiux from './UIUX.jpeg';
import web from './web.avif';
import mob from './mob.avif';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>I am skilled and passionate web developer with experience in creating visually appealing and user-friendly
        websites. I have a strong understanding of design and a keen eye for detail.</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={uiux} alt='' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>I am good at figma and balsamiq ui/ux design</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={web} alt='' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>Frontend Developer</h2>
                    <p>I know HTML5, CSS, Bootstrap, JavaScript, React Js, Vue Js</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={mob} alt='' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>Backend Developer</h2>
                    <p>I know Python, MySQL, MongoDB</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills