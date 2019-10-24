import { currenciesReducer } from './currenciesReducer';
import { walletsReducer } from './walletsReducer';
import { combineReducers } from 'redux';
import { dataForDayReducer } from './dataForDayReducer';
import { activeChartReducer } from './activeChartReducer';

export const rootReducer = combineReducers({
  currencies: currenciesReducer,
  wallets: walletsReducer,
  dataForDay: dataForDayReducer,
  activeChart: activeChartReducer,
});