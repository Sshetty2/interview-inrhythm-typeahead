import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Typeahead } from '../typeahead/typeahead';
import {getCountries, IStoreState} from '../../redux';

export interface IFormPage {}

export const FormPage: React.FC<IFormPage> = (props) => {
	const { country, countries } = useSelector((state: IStoreState) => state.sampleReducer);
	const dispatch = useDispatch();
	console.log(countries)

	// const [countries, setCountries] = useState([]);
  // const [country, setCountry] = useState('');

  /**
   * TODO:
   * This component currently uses setState. We would like to use Redux instead
   * - Please change the useEffect and onChange methods to dispatch actions instead
   * - Here are two lines you might need
   *    const { country, countries } = useSelector((state: IStoreState) => state.sampleReducer);
   *    const dispatch = useDispatch();
   */

  useEffect(() => {
		dispatch(getCountries())
  }, []);

  return (
    <>
      <form>
        <label>Country: </label>
        <Typeahead options={countries} onChange={(choice) => dispatch({ type: 'SET_COUNTRY', payload: choice })} />
        <button type="submit">Submit</button>
        <br />
        <br />
        You chose: {country}
      </form>
    </>
  );
};
