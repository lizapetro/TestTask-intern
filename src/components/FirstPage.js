import React from 'react';

import searching from '../image/magnifying-glass.png';
import call from '../image/speaker.png';

import '../styles/FirstPage.css';

import { Icon } from './Icon';
import { Balance } from './Balance';
import { Wallet } from './Wallet';

export function FirstPage ({ wallets, dataForDay }) {
  let sum = 0;
  let oldSum = 0;
  const len = dataForDay.length - 1;
  dataForDay.forEach (wallet => {
    const currency = wallet.name;
    sum = sum + wallets[currency].dollar;
    oldSum = oldSum + wallets[currency].money * wallet.dataForDay[len].close;
  });

  return (
    <div className='first-page'>
      <header>
        <Icon image={searching} />
        <Icon image={call} />
      </header>
      <Balance sum={sum.toFixed(2)} profit={(sum - oldSum).toFixed(2)}/>  
      {dataForDay.map (wallet => 
        <Wallet key={wallet.name} data={wallets[wallet.name]} 
          dataLastDay={wallet.dataForDay[len].close} pricePeriod={wallet.dataForDay}/>)}
    </div>
  );
}
