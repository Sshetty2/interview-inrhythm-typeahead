import { Reducer } from 'redux';

/**
 * TODO:
 * - Implement countries as an array of strings
 * - Implement country as a string
 */

export interface ISampleReducerState {
  countries: string[],
  country: string
};

const initialState: ISampleReducerState = {
  countries: [],   
  country: ''
};

export const sampleReducer: Reducer<ISampleReducerState> = (state = initialState, action) => {
  switch (action.type) {
    /**
     * TODO:
     * - Implement case COUNTRIES_RECEIVED
     * - Store the countries in the reducer
     */
    case 'GET_COUNTRY': {
      return {
        ...state, 
        countries: action.countries,
      }
    }

    /**
     * TODO:
     * - Implement case SET_COUNTRY
     * - Store the country in the reducer
     */
    case 'SET_COUNTRY': {
      return {
        ...state, 
        country: action.country,
      }
    }

    default:
      return state;
  }
};
