/*
* Lising Cars Actions and API calls handling.
*/


import * as types from '../constants/actionTypes';

import axios from 'axios';

/**
 * Changes the input field of the form
 *
 * @param  {object} carlist The new text of the input object
 *
 * @return {object} An action object with a type of GET_CARS_LIST_SUCCESS
 */

export function getCarsData(payload) {
  return (dispatch) => {
    const { color, manufacturer, page } = payload;
    let { sort } = payload;
    sort = sort ? `&sort=${sort}` : '&sort=asc';
    let url =
      color && manufacturer
        ? `color=${color}&manufacturer=${manufacturer}`
        : color
          ? `color=${color}`
          : '';
    url = manufacturer && color === '' ? `&manufacturer=${manufacturer}` : url;

    axios.get(`${types.CAR_API_URL}/?${url}&page=${page}${sort}`)
      .then(carListData => {
        dispatch({
          type: types.GET_CARS_LIST_SUCCESS,
          carlist: carListData,
        });
      })
      .catch(error => {
        dispatch({
          type: types.GET_CARS_LIST_FAILURE,
          error,
        });
      });
  }
}

export function getColors() {
  return (dispatch) => {
    axios.get(types.COLOR_API_URL)
      .then(colors => {
        dispatch({
          type: types.GET_COLORS_SUCCESS,
          allcolors: colors,
        });
      })
      .catch(error => {
        dispatch({
          type: types.GET_COLORS_FAILURE,
          allcolorserror: error,
        });
      });
  };
}

export function getManufactors() {
  return (dispatch) => {
    axios.get(types.MANUFACTURER_API_URL)
      .then(response => {
        dispatch({
          type: types.GET_MANUFACTORERS_SUCCESS,
          allmanuF: response,
        });
      })
      .catch(error => {
        dispatch({
          type: types.GET_MANUFACTORERS_FAILURE,
          manufactorerror: error,
        });
      });
  };
}




