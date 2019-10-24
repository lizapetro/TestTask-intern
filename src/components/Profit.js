import React from 'react';
import '../styles/Profit.css';

export function Profit ({ profit, name }) {
  return (
    <div className={'currency-profit ' + name}>
      <p className={profit < 0 ? 'loss' : 'profit'}><span>&#36;</span>{Math.abs(profit)}</p>
    </div>
  );
}