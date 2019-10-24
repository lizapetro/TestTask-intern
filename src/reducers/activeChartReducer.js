import 
{ 
  ACTIVE_WALLET_CHANGE, 
  ACTIVE_PERIOD_CHANGE, 
  SUCCESS_LOADING_PRICE_PERIOD, 
  ACTIVE_WALLET_CHOOSE, 
  ADD_DEFAULT_DATA 
} from '../actionConstants';

const initialState = {
  when: 'day',
  what: 'BTC',
  isLoading: false,
  pricePeriod:[]
};

export function activeChartReducer (state = initialState, { type, payload }) {

  switch (type) {
  case ADD_DEFAULT_DATA:
    return {
      ...state,
      pricePeriod: payload,
    };
  case ACTIVE_WALLET_CHOOSE:
    return {
      ...state,
      what: payload.what,
      when: payload.when,
      pricePeriod: payload.pricePeriod,
      isLoading: false
    };
  case ACTIVE_WALLET_CHANGE:
    return {
      ...state,
      what: payload,
      isLoading: true
    };
  case ACTIVE_PERIOD_CHANGE:
    return {
      ...state,
      when: payload,
      isLoading: true
    };
  case SUCCESS_LOADING_PRICE_PERIOD:
    return { ...state, pricePeriod: payload, isLoading: false };
  default:
    return state;
  }
}