/*
* Listing Reducer.
*/
import {
  GET_CARS_LIST,
  GET_CARS_LIST_SUCCESS,
  GET_CARS_LIST_FAILURE,
  SORT_CARS,
  GET_COLORS_SUCCESS,
  GET_COLORS_FAILURE,
  GET_MANUFACTORERS_SUCCESS,
  GET_MANUFACTORERS_FAILURE,
} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function listingCarsReducer(state = initialState.listingCars, action) {
  switch (action.type) {
    case GET_CARS_LIST:
      return objectAssign(
        {},
        state,
        {
          loading: true,
          error: false,
          payload: action.payload,
        }
      );
    case SORT_CARS:
      return objectAssign(
        {},
        state,
        {
          sort: action.sort,
        }
      );
    case GET_CARS_LIST_SUCCESS:
      return objectAssign(
        {},
        state,
        {
          carlist: action.carlist,
          loading: false,
        }
      );
    case GET_CARS_LIST_FAILURE:
      return objectAssign(
        {},
        state,
        {
          error: action.error,
          loading: false,
        }
      );
    case GET_COLORS_SUCCESS:
      return objectAssign(
        {},
        state,
        {
          allcolors: action.allcolors,
        }
      );
    case GET_COLORS_FAILURE:
      return objectAssign(
        {},
        state,
        {
          allcolorserror: action.allcolorserror,
        }
      );
    case GET_MANUFACTORERS_SUCCESS:
      return objectAssign(
        {},
        state,
        {
          allmanuF: action.allmanuF,
          loading: false,
        }
      );
    case GET_MANUFACTORERS_FAILURE:
      return objectAssign(
        {},
        state,
        {
          allmanuFerror: action.manufactorerror,
        }
      );

    default:
      return state;
  }
}
