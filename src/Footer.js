import React from 'react';
import './Footer.css';
import ssrlogo from './images/ssr-blacklogo 3.png';

function Footer() {
  return (
    <div className='footer'>
      <img src={ssrlogo} alt='' />
      <div className='footer--header'>
        <div className='fheader'>MENU</div>
        <div className='fheader'>LOCATIONS</div>
        <div className='fheader'>REVIEWS</div>
        <div className='fheader'>CONTACT</div>
      </div>
    </div>
  );
}

export default Footer;
