import React from 'react';
import './PrettyCard.css';


function PrettyCard(props) {
    const { image, children }  = props
    return (
      <div className='PrettyCard'>
        <img src={image} />
        <div className='PrettyCardContent'>
          <p>
            {children}
          </p>
        </div>

      </div>
    );
    
}

export default PrettyCard;