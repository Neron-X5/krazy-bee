import React from 'react';

import './style.css';

const Slide = ({ album = {} }) => {
  const { id, title, url } = album;
  return (
    <div className='slide'>
      <img
        alt={title}
        src={url || ''}
      />
      <div>{title}</div>
      <div>{`id: ${id}`}</div>
    </div>
  );
};

export default Slide;
