import React from 'react'
import './about.css'
import vgn from "../../data/vision.png";
import glb from '../../data/heading-bg.webp';
import fe from '../../data/front-end-development-logos-hd-png-download.png';
import gl from '../../data/istockphoto-1244666924-612x612.jpg';
import be from '../../data/backend.png';
import bc from '../../data/Core-Blockchain-Developer.png';
import md from '../../data/mobile-mobile.png';
import IOT from '../../data/IoT_devices_at_the_edge__depicting_the_volume_of_data_generated_and_.png'
import sf from '../../data/saleforce.png'
import sap from '../../data/SAP develpper.png'
import devops from '../../data/DEVOPS.png'
import gd from '../../data/graphic-designer-and-video-editing.png'
import ep from '../../data/enterprise_ready.jpg'
import ms from '../../data/matching-speed-modified.webp'
import fs from '../../data/flexible-staff-modified.webp'
import fss from '../../data/first step.png'
import handshake from "../../data/handshake-icon-graphic-an54g0vbppswmf14.png"

const About = () => {
  return (
    <section id= "about" className='about'><br /><br />
      <img src={glb} alt="global" className='glb'/> 
        <span className='h3'>Introducing Shailka Systems: </span><br /><br />
        <div className="h2">Your Premier IT Talent Hunt and Recruitment Platform</div><br /><br />
        <img src={glb} alt="global" className='glb'/> 
        <span className='h3'>Our Vision & Mission</span><br /><span className='introtext'>Our values show the type of high-quality service you will get from us.</span><br />
         <img src={vgn} alt="vgn" className='image'/><br />
        <span className='h2'>Welcome to the future of meaningful, sustainable work</span><br />
        <span className='introtext'>We believe that the sum is greater than our parts - our impact can be seen globally. We specialize in helping our highly-skilled, global technology talent community in emerging markets, connect with hundreds of leading companies.</span><br />
        <img src={handshake} alt="handshake" className='image'/>
        <div className='flow'>
        <div className='subflow'>
          <span className='h3'>5 Days</span><br />
          <span className='h4'>Hiring process</span>
        </div>
        <div className='subflow'>
        <span className='h3'>Top 3.5%</span><br />
          <span className='h4'>Talent Vatted</span>
        </div>
        <div className='subflow'><span className='h3'>Upto 40%</span><br />
          <span className='h4'>Cost Advantage</span></div>
        <div className='subflow'>
          <span className='h3'>5+ Time </span><br />
          <span className='h4'>Zone Availability</span>
          </div>
    </div>
  <span className='h2'>Ready to start a conversation?</span><br />
  <span className='introtext'>Let’s explore how we can accelerate and de-risk your cloud modernization together.</span><br /><br />

  {/* </div> */}
      
      <img src={glb} alt="global" className='glb'/> 
      <span className='h3'>Global Elite Talent Network</span><br /><br />
      <span className='introtext'>Explore our pool of 5000+ top pre-vetted technology specialists equipped with cutting-edge technologies. All timezones covered.</span><br /><br />
      <img src={gl} alt="globa;" className='image'/><br /><br />
      <img src={glb} alt="global" className='glb'/>
      <span className='h3'>Front End Developer</span><br /><br />
      <span className='introtext'>We have skilled PHP developers for startups who are looking to build their MVP & React, Vue.js & Angular developers for growing organisations.</span><br /><br />
      <img src={fe} alt="frontend" className='image'/><br /><br />
      <img src={glb} alt="global" className='glb'/>
      <span className='h3'>Backend Developer</span><br /><br />
      <span className='introtext'>We have specialists in full-stack and back-end development, with expertise in Rust, Go Lang, Node.JS, Java, Scala, Python, or C++.</span><br /><br />
      <img src={be} alt="backend" className='image'/><br /><br />
      <img src={glb} alt="global" className='glb'/>
      <span className='h3'>Blockchain Developers</span><br /><br />
      <span className='introtext'>We have pre-vetted experts with skill sets in Web assembly, Web3, Rust, Solidity, Ethereum, Hyperledger, Polygon, and Chainlink protocols.</span><br /><br />
      <img src={bc} alt="blockchain" className='image'/><br /><br />
      <img src={glb} alt="global" className='glb'/>
      <span className='h3'>Mobile Developers</span><br /><br />
      <span className='introtext'>Build top-notch cross-platform mobile applications for iOS & Android using Flutter, React Native or Ionic framework along with iOS & Android native development if required</span><br /><br />
      <img src={md} alt="mobile" className='image'/><br /><br />
      <img src={glb} alt="global" className='glb'/>
      <span className='h3'>IoT & Edge computing Experts</span><br /><br />
      <span className='introtext'>Hire professionals expert in building prototype devices on top of Beagleboard, Raspberry Pi, Arduino & Intel edge computing devices. Our drone makers have expertise with DIY as well as PX4 ecosystems.</span><br /><br />
      <img src={IOT} alt="IOT" className='image'/><br /><br />
      <img src={glb} alt="global" className='glb'/>
      <span className='h3'>Salesforce Developers</span><br /><br />
      <span className='introtext'>We have pre-vetted salesforce developers with expertise in APEX & Javascript</span><br /><br />
      <img src={sf} alt="salesforce"  className='image'/><br /><br />
      <img src={glb} alt="global" className='glb'/>
      <span className='h3'>SAP Developers</span><br /><br />
      <span className='introtext'>We have pre-vetted SAP developers with expertise in ABAP & wide array of SAP modules</span><br /><br />
      <img src={sap} alt="sapdev" className='image'/><br /><br />
      <img src={glb} alt="global" className='glb'/>
      <span className='h3'>Cloud & DevOps Engineers</span><br /><br />
      <span className='introtext'>Our DevOps engineers are highly skilled in CNCF tools (Docker, Kubernetes), certified in AWS, GCP, and Azure, proficient in shell scripting, and adept at creating command-line utilities using GoLang.</span><br /><br />
      <img src={devops} alt="devops" className='image'/><br /><br />
      <img src={glb} alt="global" className='glb'/>
      <span className='h3'>Graphic Designers & Video Editing experts</span><br /><br />
      <span className='introtext'>Expert team in Photoshop, Illustrator, InDesign, video editing (Final Cut Pro, Adobe Premiere, Filmora, DaVinci Resolve), audio mixing, and stunning digital art.</span><br /><br />
      <img src={gd} alt="graphics" className='image'/><br /><br />
      <span className='h2'>We are prepared to meet your talent needs.</span><br /><br />
      <span className='introtext'>Join our global community of technologists and discover new opportunities for growth and collaboration.</span><br /><br />
            <img src={glb} alt="global" className='glb'/>
      <span className='h3'>Matching speed</span><br /><br />
      <span className='introtext'>Our team can help you move faster without sacrificing quality. We can radically reduce the time it takes to hire talent, so you can find the right fit quickly.</span><br /><br />
      <img src={ms} alt="matching" className='image'/><br /><br />
      <img src={glb} alt="global" className='glb'/>
      <span className='h3'>Enterprise-Ready</span><br /><br />
      <span className='introtext'>Our technologists have verified backgrounds, work in your time zone, and comply with your company’s security practices. This means you can focus on making an impact, while we take care of the rest.</span><br /><br />
      <img src={ep} alt="entrprise"  className='image'/><br /><br />
      <img src={glb} alt="global" className='glb'/>
      <span className='h3'>Flexible teams</span><br /><br />
      <span className='introtext'>Find niche expertise for various project lengths. Onboard solo engineers to fill gaps, or hire full teams to accelerate your build. Get any technology, any time zone, any skill.</span><br /><br />
      <img src={fs}alt="flexibleteam" className='image'/><br /><br />
      <span className='h2'>Take the First Step Towards Growth</span><br /><br />
      <span className='introtext'>Take the First Step Towards Growth and Let’s explore how we can accelerate and de-risk your tech modernisation efforts together.</span><br /><br />
      <img src={fss} alt="firststep" className='image'/>
    
    

  </section>
  )
}

export default About
