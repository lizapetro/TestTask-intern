import { ADD_PROFIT, ADD_DOLLAR } from '../actionConstants';
import { getCurrentWallets } from '../dataWallets';
const initialState = getCurrentWallets();

export function walletsReducer (state = initialState, { type, payload }) {
  switch (type) {
  case ADD_PROFIT:
    state[payload.currency].profit = payload.profit;
    return {
      ...state,
    };
  case ADD_DOLLAR:
    const keys = Object.keys(payload);
    keys.forEach(currency => {
      state[currency].USD = payload[currency].USD;
      state[currency].dollar = state[currency].money * payload[currency].USD;
    });
    return {
      ...state
    };
  default: 
    return state;
  }
}