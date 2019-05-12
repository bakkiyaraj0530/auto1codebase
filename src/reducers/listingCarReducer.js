// import { SAVE_FUEL_SAVINGS, CALCULATE_FUEL_SAVINGS } from '../constants/actionTypes';
import {
  GET_CARS_LIST,
  GET_CARS_LIST_SUCCESS,
  GET_CARS_LIST_FAILURE,
  SORT_CARS,
  SET_COLOR_NAME,
  SET_MANUFACTORER,
  GET_COLORS,
  GET_MANUFACTORERS,
  GET_COLORS_SUCCESS,
  GET_COLORS_FAILURE,
  GET_MANUFACTORERS_SUCCESS,
  GET_MANUFACTORERS_FAILURE,
} from '../constants/actionTypes';
// import {necessaryDataIsProvidedToCalculateSavings, calculateSavings} from '../utils/fuelSavings';
import objectAssign from 'object-assign';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function listingCarsReducer(state = initialState.listingCars, action) {
  // let newState;

  switch (action.type) {
    case GET_CARS_LIST:
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
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
          carlist: action.error,
          loading: false,
        }
      );
    case SET_COLOR_NAME:
      return objectAssign(
        {},
        state,
        {
          color: action.color,
        }
      );
    case SET_MANUFACTORER:
      return objectAssign(
        {},
        state,
        {
          manuF: action.manuF,
        }
      );
    case GET_COLORS:
      return objectAssign(
        {},
        state,
        {
          allcolors: false,
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
    case GET_MANUFACTORERS:
      return objectAssign(
        {},
        state,
        {
          allmanuF: false,
          // loading: false,
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
    // case CALCULATE_FUEL_SAVINGS:
    //   newState = objectAssign({}, state);
    //   newState[action.fieldName] = action.value;
    //   newState.necessaryDataIsProvidedToCalculateSavings = necessaryDataIsProvidedToCalculateSavings(newState);
    //   newState.dateModified = action.dateModified;

    //   if (newState.necessaryDataIsProvidedToCalculateSavings) {
    //     newState.savings = calculateSavings(newState);
    //   }

    //   return newState;

    default:
      return state;
  }
}
