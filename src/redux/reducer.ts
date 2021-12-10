import { Reducer } from 'redux';
import { COUNTRIES_RECEIVED, SET_COUNTRY } from './types';
/**
 * TODO:
 * - Implement countries as an array of strings
 * - Implement country as a string
 */


export interface ISampleReducerState {
  countries: string[] | null;
  country: string;
}

const initialState: ISampleReducerState = {
  countries: null,
  country: ''
};

export const sampleReducer: Reducer<ISampleReducerState> = (state = initialState, action) => {
  switch (action.type) {

    case COUNTRIES_RECEIVED:
      return {
        ...state,
        countries: action.payload
      }

    case SET_COUNTRY:
      return {
        ...state,
        country: action.payload
      }
    default:
      return state;
  }
};
