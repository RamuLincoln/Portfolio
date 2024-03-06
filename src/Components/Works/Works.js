import React, { useEffect, useState } from 'react';
import './Works.css';
import data from './workdata';
import {motion} from 'framer-motion';

const Works = () => {
//useState
    const [count, setCount] = useState(2);
    const [disablebtn, setDisablebtn] = useState(false);
    
    const slice = data.slice(0,count);
//function for load more by 2   
    function loadmore() {
        setCount(count + count)
    }
//if projects reached it length load more button will disable 
    useEffect(()=>{
        if (data.length === slice.length) setDisablebtn(true);
    },[slice.length]);

    const variants = {
        active: {
            scale: 1.2
        },
        inactive: {
            scale : 0.8
        }
      }
    
  return (
    <div>
    <section id='Works'>
        <h2 className='workstitle'>My Portfolio</h2>
        <div className='worksImgs'>
            {slice.map((item,index)=>{
                return(
                    <div className='workscontent'>
                    <a href={item.web} rel="noreferrer" target="_blank"><motion.img variants={variants} animate="inactive" src={item.image} alt='QRcode' className='worksImg' /></a>
                        <div className='worksdesc'>
                            <div className='worktitle'>{item.worktitle}</div>
                            <div className='workpara'>{item.workdesc}</div>
                            <div className='worktech'>{item.worktech}</div>
                            <div className='workpara'>{item.workpara}</div>
                            <div className='workllinks'>
                                <button className='btn'><a href={item.web} rel="noreferrer" target="_blank">Website</a></button>
                                <button className='btn'><a href={item.github} rel="noreferrer" target="_blank">Github</a></button>
                            </div>
                        </div>
                    </div>
                    )
                })}
        </div>
        
{/* button for load more */}  
        {disablebtn ? <p>Thanks</p> : <button disabled={disablebtn} onClick={loadmore} className='lmbtn'>
            Load more
        </button>}
    </section>
    </div>
  )
}

export default Works