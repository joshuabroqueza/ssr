import React from 'react';
import './Location.css';
import ssrlocation from './images/image 38.png';

function Location() {
  return (
    <div className='location'>
      <div className='location--right'>
        <h2>
          VISIT OUR <br />
          LOCATION!
        </h2>
        <p>
          No matter where you choose to induldge, the quality and
          <br />
          service remain the same. You won't find an atmosphere <br />
          like ours elsewhere.
        </p>
        <button>OUR LOCATIONS</button>
      </div>

      <div className='location--left'>
        <img src={ssrlocation} alt='' />
      </div>
    </div>
  );
}

export default Location;
