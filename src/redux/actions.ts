import axios from 'axios';

/**
 * TODO:
 * - Implement getCountries
 * - Use Axios or fetch to get the countries from `/api/countries.json`
 * - Store the result in the reducer
 */
export const getCountries = () => {
	return dispatch => axios.get('/api/countries.json')
		.then(res => dispatch({ type: 'COUNTRIES_RECEIVED', payload: res.data }))
		.catch(function (error) {
			console.log(error);
		})
}

/**
 * TODO:
 * - Implement setCountry
 * - Store the country in the reducer
 */
