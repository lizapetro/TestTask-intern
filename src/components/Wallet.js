import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ACTIVE_WALLET_CHOOSE } from '../actionConstants';

import '../styles/Wallet.css';

import { getProfit } from '../functions';
import { Profit } from './Profit';
import { Currency } from './Currency';

export function Wallet ({ data, dataLastDay, pricePeriod }) {
  const { name, allName, money, dollar, USD } = data;
  const profit = getProfit(USD, dataLastDay);
  const dispatch = useDispatch();

  return (
    <Link to='/wallet/' onClick={() => dispatch({
      type: ACTIVE_WALLET_CHOOSE,
      payload: {
        when: 'day',
        what: name,
        pricePeriod,
        isLoading: false
      }
    })}>
      <div className={'wallet'}>
        <div className='wallet-info'>
          <Currency name={name} allName={allName}/>
          <div className='wallet-sum'>
            <p>{money}</p>
            <span>&#36;{(dollar || 0).toFixed(2)}</span>
          </div>
        </div>

        <div className='currency-info'>
          <div className='currency-price'>
            <p>&#36;{ USD }</p>
            <span>Price</span>
          </div>
          <div className='profit-or-loss'>
            <Profit profit={ profit } name={ 'profit-wallet' }/>
            <span className='profit-or-loss'>Profit/Loss</span>
          </div>
          
        </div>  

      </div>
    </Link>
  ) ;
}
