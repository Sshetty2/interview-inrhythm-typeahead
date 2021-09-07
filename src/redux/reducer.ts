import { Reducer } from 'redux';

/**
 * TODO:
 * - Implement countries as an array of strings
 * - Implement country as a string
 */

export interface ISampleReducerState {
	country: String,
	countries: String[]
}

const initialState: ISampleReducerState = {
	country: '',
	countries: []
};

export const sampleReducer: Reducer<ISampleReducerState> = (state = initialState, action) => {
  switch (action.type) {
    /**
     * TODO:
     * - Implement case COUNTRIES_RECEIVED
     * - Store the countries in the reducer
     */
		case "COUNTRIES_RECEIVED":
			return {
				...state,
				countries: action.payload
			}
			break;


    /**
     * TODO:
     * - Implement case SET_COUNTRY
     * - Store the country in the reducer
     */
		case "SET_COUNTRY":
			return {
				...state,
				country: action.payload
			}
			break;


    default:
      return state;
  }
};
