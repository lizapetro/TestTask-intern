import React from 'react';

import '../styles/Currency.css';
import 'crypto-icons/font.css';
import 'crypto-icons/styles.css';

export function Currency ({ name, allName }) {
  return (
    <div className='currency-wallet'>
      <div className={'icon icon-' + name.toLowerCase()}></div>
      <div className='name'>
        <p>{name}</p>
        <span>{allName}</span>
      </div>
    </div>
  );
}