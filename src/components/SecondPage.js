import React from 'react';
import { Link } from 'react-router-dom'; 
import { Chart } from './Chart';

import '../styles/SecondPage.css';

import { MiniWallet } from './MiniWallet';
import { Period } from './Period';

const periods = ['day', 'week', 'month'];

export function SecondPage ({ wallets, dataForDay, active }) {
  const len = dataForDay.length - 1; 
  return (
    <>
      <Link to='/'>
        &#8592;
      </Link>

      <div className='list-wallets'>
        {dataForDay.map(wallet => <MiniWallet key={wallet.name} data = {wallets[wallet.name]} 
          active={active} dataLastDay={wallet.dataForDay[len].close}/>)}
      </div>
      
      {dataForDay.map(wallet => {
        return ((wallet.name === active.what) ? 
          <MiniWallet active={active} key={wallet.name} data = {wallets[wallet.name]} 
            flag={'active-wallet'} dataLastDay={wallet.dataForDay[len].close}/> : 
          null);
      })
      }
      
      <div className='periods'>
        {periods.map(period => <Period key={period} name={ period } active={active}/>)}
      </div>

      <Chart active={active}/>
    </>
  );
}
