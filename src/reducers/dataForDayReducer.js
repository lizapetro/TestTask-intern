import { ADD_DATA_FOR_DAY } from '../actionConstants';
const initialState = [];

export function dataForDayReducer (state = initialState, { type, payload }) {
  switch (type) {
  case ADD_DATA_FOR_DAY:
    return payload;
  default:
    return state;
  }
}