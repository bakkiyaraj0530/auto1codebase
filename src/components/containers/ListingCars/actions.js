// Handling API's

import axios from 'axios';

import {
  // SORT_CARS,
  // GET_CARS_LIST,
  GET_CARS_LIST_SUCCESS,
  GET_CARS_LIST_FAILURE,
  // SET_COLOR_NAME,
  // SET_MANUFACTORER,
  // GET_COLORS,
  // GET_MANUFACTORERS,
  GET_COLORS_SUCCESS,
  GET_COLORS_FAILURE,
  GET_MANUFACTORERS_SUCCESS,
  GET_MANUFACTORERS_FAILURE,
} from './constants';

// import request from 'utils/request';


/**
 * Changes the input field of the form
 *
 * @param  {object} payload The new text of the input object
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */

/*
* API CALLS FETCH 
*/

export function getCarDatasuccess(carlist) {
  return {
    type: GET_CARS_LIST_SUCCESS,
    carlist,
  };
}

export function getCarDataFailure(error) {
  return {
    type: GET_CARS_LIST_FAILURE,
    error,
  };
}

export function getCarsData(payload) {
  return (dispatch) => {
    const requestURL = 'http://localhost:3001/cars';
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

    axios.get(`${requestURL}/?${url}&page=${page}${sort}`)
      .then(function (response) {
        dispatch(getCarDatasuccess(response));
      })
      .catch(function (error) {
        dispatch(getCarDataFailure(error));
      });
  }
}

export function getColorssuccess(allcolors) {
  return {
    type: GET_COLORS_SUCCESS,
    allcolors,
  };
}

export function getColorsFailure(allcolorserror) {
  return {
    type: GET_COLORS_FAILURE,
    allcolorserror,
  };
}


export function getColors() {
  return (dispatch) => {
    const requestURL = 'http://localhost:3001/colors';
    axios.get(requestURL)
      .then(response => {
        dispatch(getColorssuccess(response));
      })
      .catch(function (error) {
        dispatch(getColorsFailure(error));
      });
  };
}

 export function getManufactors() {
    return (dispatch) => {
    const requestURL = 'http://localhost:3001/manufacturers';
    axios.get(requestURL)
      .then(response => {
        dispatch(getManufactorssuccess(response));
      })
      .catch(error => {
        dispatch(getColorsFailure(error));
      });
  };
  }
  
  export function getManufactorssuccess(allmanuF) {
    return {
      type: GET_MANUFACTORERS_SUCCESS,
      allmanuF,
    };
  }
  
  export function getManufactorsFailure(manufactorerror) {
    return {
      type: GET_MANUFACTORERS_FAILURE,
      manufactorerror,
    };
  }

// export function sortCars(sort) {
//   return {
//     type: SORT_CARS,
//     sort,
//   };
// }
// export function setColor(color) {
//   return {
//     type: SET_COLOR_NAME,
//     color,
//   };
// }
// export function setManufacturer(manuF) {
//   return {
//     type: SET_MANUFACTORER,
//     manuF,
//   };
// }



