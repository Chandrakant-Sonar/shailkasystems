import React, { useRef } from 'react';
import './apply.css';

import emailjs from 'emailjs-com';

const Apply = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_yaw0pwe', 'template_cdij0ug', form.current, {
                publicKey: 'Z8hw7juR3ri5Jjq0W'
            })
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
        <section id='apply'>
            
            <div id="Contact">
                <h1 className='h1'>Apply as a Talent </h1>
                <span className='contactdetails'>Please fill up the form below to discuss any opportunity</span>
                <form className="contactform" ref={form} onSubmit={sendEmail}>
                    <input type="text" className='name' placeholder='Your Name' name='your_name' />
                    <input type="email" className='email' placeholder='Your Email' name='your_email' />
                    <textarea className="msg" name="message" cols="30" rows="10" placeholder='Your Message'></textarea>
                    <button type='submit' className='submit'>Submit</button>
                 
                </form>
            </div>
        </section>
    );
}

export default Apply;
