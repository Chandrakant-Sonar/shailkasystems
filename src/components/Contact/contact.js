import React, { useRef } from 'react';
import './contact.css';

import emailjs from 'emailjs-com';
import getintouch from '../../data/get-in-touch-1.webp'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_t1d1brw', 'template_cdij0ug', form.current,'Z8hw7juR3ri5Jjq0W'
            )
            .then((result) => {
                console.log(result.text);
                alert('Email sent successfully');
                e.target.reset();
            })
            .catch((error) => {
                console.error('Email sending failed:', error);
            });
    };

    return (
        <section id='contactUs'>
           
            <div id="Contact">
                <img src={getintouch} alt="getintouch" className='image'/>
                {/* <h1 className='h1'>Contact US</h1> */}
                {/* <span className='contactdetails'>Please fill up the form below to discuss any opportunity</span> */}
                <form className="contactform" ref={form} onSubmit={sendEmail}>
                    <input type="text" className='name' placeholder='Your Name' name='your_name' />
                    <input type="email" className='email' placeholder='Your Email' name='your_email' />
                    <textarea className="msg" name="message" cols="30" rows="6" placeholder='Your Message'></textarea>
                    <button type='submit' className='submit1'>Submit</button><br />
                </form>
            </div>
        </section>
    );
}

export default Contact;


