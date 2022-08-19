import React from 'react';
import './Socials.css';
import faceIcon from './images/fbicon.png';
import instaIcon from './images/instaicon.png';

function Socials() {
  return (
    <div className='socials'>
      <h5>FOLLOW US ON SOCIAL MEDIA</h5>
      <span>
        <img src={faceIcon} alt='' />
      </span>
      <span>
        <img src={instaIcon} alt='' />
      </span>
    </div>
  );
}

export default Socials;
