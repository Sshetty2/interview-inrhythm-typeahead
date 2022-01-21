import axios from 'axios';
import { SET_COUNTRY, SET_COUNTRIES } from './types';

/**
 * TODO:
 * - Implement getCountries
 * - Use Axios or fetch to get the countries from `/api/countries.json`
 * - Store the result in the reducer
 */
export const getCountries = (dispatch) => {
  axios
    .get('/api/countries.json')
    .then((res) => res.data)
    .then((res) =>
      dispatch({
        type: SET_COUNTRIES,
        payload: res,
      }),
    );
};

/**
 * TODO:
 * - Implement setCountry
 * - Store the country in the reducer
 */
export const setCountry = (country: string) => {
  return {
    type: SET_COUNTRY,
    payload: country,
  };
};
