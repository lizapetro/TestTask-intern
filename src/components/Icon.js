import React from 'react';

export function Icon ({ image }) {
  return (
    <div className='icon-img'>
      <img src={image}></img>
    </div>
  );
}