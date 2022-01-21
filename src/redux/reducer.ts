import { Reducer } from 'redux';
import { SET_COUNTRY, SET_COUNTRIES } from './types';

/**
 *
 * - Implement countries as an array of strings
 * - Implement country as a string
 */

export interface ISampleReducerState {
  country: string;
  countries: string[];
}

const initialState: ISampleReducerState = {
  country: '',
  countries: [],
};

export const sampleReducer: Reducer<ISampleReducerState> = (state = initialState, action) => {
  switch (action.type) {
    /**
     * :
     * - Implement case COUNTRIES_RECEIVED
     * - Store the countries in the reducer
     */
    case SET_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };
    case SET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    /**
     * :
     * - Implement case SET_COUNTRY
     * - Store the country in the reducer
     */

    default:
      return state;
  }
};
