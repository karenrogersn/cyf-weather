import React from 'react';
import '../Error/Error.css';

const Error = (props) => {
  return (
    <React.Fragment>
      <div className='backdrop' onClick={props.onClose}>
        <div className='error-modal'>
          <h2 className='error-title'>This location was not found!</h2>
          <p className='error-subtitle'>{props.children}</p>
          <button className='error-btn' type='button' onClick={props.onClose}>
            Okay
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Error;
