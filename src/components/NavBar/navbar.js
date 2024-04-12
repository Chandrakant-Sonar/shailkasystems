import React from 'react'
import './navbar.css'
import logo from '../../data/cropped-logo-1_edited.png';
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
   <nav className='navbar'>
    <img src={logo} alt="logo" className='logo'/>
    <div className='desktopmenu'>
        <Link activeClass='active' to ='intro' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItems'>Home</Link>
        <Link activeClass='active' to ='about' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItems'>About US</Link>
        <Link activeClass='active' to ='contactUs' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItems'>Contact US</Link>
        <Link activeClass='active' to ='hire' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItems'>Hire a Talent</Link>
        {/* <Link activeClass='active' to ='apply' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItems'>Apply as a Talent</Link> */}
    </div>
    {/* <button className='desktopMenuBtn'>
        <img src="" alt="" className='desktopMenuImg'/>contact US</button> */}
   </nav>
  )
}

export default Navbar
