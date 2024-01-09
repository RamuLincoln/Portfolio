import React, { useState } from 'react';
import './Skills.css';
import data from "./data";

const Skills = () => {
//useState
  const [selected, setSelected] = useState(null);
  
//show the skills depends on the item clicked 
  function handleClick(Id){
    setSelected(Id === selected ? null : Id)
  }
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>I am skilled and passionate web developer with experience in creating visually appealing and user-friendly
        websites. I have a strong understanding of design and a keen eye for detail.</span>
        <div className='skillBars'>
        {data.map((item)=>(
            <div onClick={()=>handleClick(item.Id)} className='skillBar'>

                    <img src={item.Image} alt='' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>{item.Title}</h2>
                        {
                        selected === item.Id ? 
                        <div><p>{item.Desc}</p></div> :
                        null
                    }
                    </div>
            </div>))}
        </div>
    </section>
  )
}

export default Skills