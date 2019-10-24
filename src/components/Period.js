import React from 'react';
import { useDispatch } from 'react-redux';
import { ACTIVE_PERIOD_CHANGE, SUCCESS_LOADING_PRICE_PERIOD } from '../actionConstants';
import { getPricePeriod } from '../requestAPI';

export function Period ({ name, active }) {
  const dispatch = useDispatch();

  return (
    <div className={(name === active.when ? 'active' : null) + ' period'}
      onClick = {async () => {
        if (active.when !== name) {
          dispatch({
            type: ACTIVE_PERIOD_CHANGE,
            payload: name
          });
          const data = await getPricePeriod(active.what, name);
          dispatch({
            type: SUCCESS_LOADING_PRICE_PERIOD,
            payload: data
          });
        }
      }}>
      {name}
    </div>
  );
}