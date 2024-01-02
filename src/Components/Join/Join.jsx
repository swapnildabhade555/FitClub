import React, { useRef } from 'react'
import './Join.css';
import emailjs from '@emailjs/browser';

const Join = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pxamhsj', 'template_4f6a1wd', form.current, 'trDSsCY805qTU5aXc')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='join' id='join'>
        <div className="left-j">
          <hr/>
            <div>
                <span className='stroke-text'>Ready To</span>
                <span>Level Up</span>
            </div>
            <div>
                <span>Your Body</span>
                <span className='stroke-text'>With Us?</span>
            </div>
        </div>
        <div className="right-j">
          <form action="" ref={form} className='email-container' onSubmit={sendEmail}>
            <input type="email" name="user_email" placeholder='Enter Your Email' id="email" />
            <button className='btn btn-j'>Join Now</button>
          </form>
        </div>
      
    </div>
  )
}

export default Join
