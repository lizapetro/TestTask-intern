import { LOADING_CURRENCIES, SUCCESS_LOADING, SUCCESS_LOADING_ALL } from '../actionConstants';
const initialState = { isLoading: true };

export function currenciesReducer (state = initialState, action) {
  switch (action.type) {
  case LOADING_CURRENCIES:
    return { ...state, isLoading: true };
  case SUCCESS_LOADING:
    return { ...state, ...action.payload, isLoading: true };
  case SUCCESS_LOADING_ALL:
    return { ...state, isLoading: false };
  default : 
    return state;
  }
}