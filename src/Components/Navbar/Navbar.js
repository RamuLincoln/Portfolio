import React from 'react';
import "./Navbar.css";
import rv from "./../../rv.jpg";
import { Link } from "react-scroll";
import msg from "./msg.png";

const Navbar = () => {
  return (
    <nav className='Navbar'>
        <img src={rv} alt="logo" className='logo' />
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuItem'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuItem'>About</Link>
            <Link activeClass='active' to='Works' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuItem'>Portfolio</Link>
        </div>
        <button className='desktopMenuBtn'>
            <img src={msg} alt='desktopMenuImg' className='desktopMenuImg' />Contact Me 
        </button>

    </nav>

  )
}

export default Navbar