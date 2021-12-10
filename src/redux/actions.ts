import axios from 'axios';
import { Dispatch } from 'redux';
import { COUNTRIES_RECEIVED, SET_COUNTRY } from './types';

export const getCountries = () => {
    return (dispatch: Dispatch) => {
        const url = `/api/countries.json`;
        axios
            .get(url)
            .then(res => {
                dispatch({
                    type: COUNTRIES_RECEIVED,
                    payload: res.data
                })
            });
    }
}


export const setCountry = (data: string) => {
    return ({
        type: SET_COUNTRY,
        payload: data
    });
}