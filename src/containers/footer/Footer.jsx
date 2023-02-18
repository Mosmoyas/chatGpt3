import React from 'react';
import './footer.css';
import logo from '../../assets/GPT-3.png';


const Footer = () => {
  return (
    <div className='gpt3__footer section__padding' >
      <div className="gpt3__footer-heading">
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>

      <div className="gpt3__footer-container">
        <div className="gpt3__footer-container-logo">
          <div className="gpt3__footer-container-logo-image">
            <img src={logo} alt="logo" />
          </div>
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-container-links">
          <div className="gpt3__footer-container-links-first">
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          <div className="gpt3__footer-container-links-first">
            <h4>Company</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div className="gpt3__footer-container-links-first">
            <h4>Get in touch</h4>
            <p>Crechterwoord K12 182 DK Alknjkcb</p>
            <p>085-132567</p>
            <p>info@payme.net</p>
          </div>
        </div>

      </div>

      <p className='copyright'>© 2021 GPT-3. All rights reserved.</p>


    </div>
  )
}

export default Footer