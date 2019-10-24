import React from 'react';
import '../styles/Balance.css';

import { Profit } from './Profit';

export function Balance ({ sum, profit }) {
  return (
    <div className='balance'>
      <div className='sum'>
        <span>Your total balance</span>
        <p>{sum}</p>
      </div>
      <div className='period-changes'>
        <span>24h Changes</span>
        <Profit profit = {profit} name={'profit-balance'}/>
      </div>
      
    </div>
  );
}