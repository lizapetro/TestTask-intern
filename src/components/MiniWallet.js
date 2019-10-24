import React from 'react';
import { useDispatch } from 'react-redux';
import { Currency } from './Currency';
import { Profit } from './Profit';
import { getProfit } from '../functions';
import { ACTIVE_WALLET_CHANGE, SUCCESS_LOADING_PRICE_PERIOD } from '../actionConstants';
import { getPricePeriod } from '../requestAPI';

export function MiniWallet ({ active, flag, data, dataLastDay }) {
  const { name, allName, money, USD } = data;
  const profit = getProfit(USD, dataLastDay);
  const dispatch = useDispatch();
  return (
    <div className={(name === active.what ? 'active' : null) + ' wallet ' + flag} 
      onClick={async () => {
        if (active.what !== name) {
          dispatch({
            type: ACTIVE_WALLET_CHANGE,
            payload: name
          });
          const data = await getPricePeriod(name, active.when);
          dispatch({
            type: SUCCESS_LOADING_PRICE_PERIOD,
            payload: data
          });
        }
      }}> 
      <Currency name={name} allName={allName}/>
      <div className='info-wallet'>
        <p>{ money }</p>
        <Profit profit={ profit } name={ 'profit-wallet' }/>
      </div>
    </div>
  );
}