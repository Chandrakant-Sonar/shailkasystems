import React from 'react'
import './intro.css';
import bg from '../../data/311506-P8G2XL-229-1.png';

const Intro = () => {
  return (
    <div>
    <section id='intro' className='app'>

        <div className='introContent'>
            <span className='h2'>Welcome to</span><br/>
            <span className='h1'>Shailka Systems</span><br />
            <span className='h2'>Hire your dream team of engineers <br /> in just one week.</span><br/>
            <span className='introtext'>While you focus on building your product, we’ll take care of the talent hunting for you.<br/> 
            Hire from a strong network of top talents from India, for the world.</span>
        </div>
        <img src={bg} alt="profile"  className='bg'/>    
          
    </section>
   
    
</div>
  )
}

export default Intro;

