import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Typeahead } from '../typeahead/typeahead';
import { IStoreState } from '../../redux';
import { getCountries, setCountry } from '../../redux/actions';
import './formPage.css';

export interface IFormPage {}

export const FormPage: React.FC<IFormPage> = (props) => {
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
  const dispatch = useDispatch();
  const { country, countries } = useSelector((state: IStoreState) => state.sampleReducer);
  useEffect(() => {
    (async () => {
      dispatch(getCountries());
    })();
  }, []);

  const onChange = (choice: string) => {
    // TODO: move this into actions/redux
    dispatch(setCountry(choice));
  };

  return (
    <>
      <form>
        <label>Country: </label>
        <Typeahead options={countries} onChange={onChange} />
        <button className="choose" type="submit">Submit</button>
        <br />
        <br />
        You chose: {country}
      </form>
    </>
  );
};
