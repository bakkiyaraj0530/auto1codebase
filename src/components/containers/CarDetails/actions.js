import axios from 'axios';

import {
  // GET_CAR_DETAILS,
  GET_CAR_DETAILS_SUCCESS,
  GET_CAR_DETAILS_FAILURE,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {number} cardId The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */

 
export function loadCarDetailsSuccess(carInfo) {
  return {
    type: GET_CAR_DETAILS_SUCCESS,
    carInfo,
  };
}
export function loadCarDetailsFailure(error) {
  return {
    type: GET_CAR_DETAILS_FAILURE,
    error,
  };
}

export function loadCarInfo(Id) {
  return (dispatch) => {
    const requestURL = `http://localhost:3001/cars/${Id}`;

    axios.get(requestURL)
      .then(response => {
        dispatch(loadCarDetailsSuccess(response));
      })
      .catch(error => {
        dispatch(loadCarDetailsFailure(error));
      });
  }
}
