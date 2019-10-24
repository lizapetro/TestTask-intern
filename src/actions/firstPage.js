import { LOADING_CURRENCIES, SUCCESS_LOADING, SUCCESS_LOADING_ALL } from '../actionConstants';
import { getPricePeriod, getPriceNow } from '../requestAPI.js';
import { ADD_DOLLAR, ADD_DATA_FOR_DAY, ADD_DEFAULT_DATA } from '../actionConstants';


export function actionFirstPage () {
  return (async dispatch => {
    dispatch({
      type: LOADING_CURRENCIES
    });
    const data = await getPriceNow();

    dispatch({
      type: SUCCESS_LOADING,
      payload: data,
    });

    // const currencies = Object.keys(data);
    // const promises = currencies.map(curr => getPricePeriod(curr));
    // const res = await Promise.all(promises);
    // console.log('promises', res);

    dispatch({
      type: ADD_DOLLAR,
      payload: data
    });

    const datasForDay = [];
    for (const currency in data) {
      const dataForDay = await getPricePeriod(currency);
      datasForDay.push({
        name: currency,
        dataForDay
      });
    }
    dispatch({
      type: ADD_DEFAULT_DATA,
      payload: datasForDay[0].dataForDay
    });
    dispatch({
      type: ADD_DATA_FOR_DAY,
      payload: datasForDay
    });
    dispatch({
      type: SUCCESS_LOADING_ALL,

    });
  });
};