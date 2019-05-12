// import { SAVE_FUEL_SAVINGS, CALCULATE_FUEL_SAVINGS } from '../constants/actionTypes';
import {
  GET_CAR_DETAILS,
  GET_CAR_DETAILS_SUCCESS,
  GET_CAR_DETAILS_FAILURE,
} from '../constants/actionTypes';
// import {necessaryDataIsProvidedToCalculateSavings, calculateSavings} from '../utils/fuelSavings';
import objectAssign from 'object-assign';
// import initialState from './initialState';
const initialState = {
    loading: false,
    carId: '',
    carInfo: '',
    error: '',
};

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function carDetailsReducer(state = initialState, action) {
  // let newState;
  console.log('action => ', action.type, action.carInfo && action.carInfo.data);
  switch (action.type) {
    case GET_CAR_DETAILS:
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
      return objectAssign(
        {},
        state,
        {
          loading: true,
          error: false,
          carId: action.carId,
        }
      );
    case GET_CAR_DETAILS_SUCCESS:
      return objectAssign(
        {},
        state,
        {
          loading: false,
          error: false,
          carInfo: action.carInfo && action.carInfo.data,
        });
    case GET_CAR_DETAILS_FAILURE:
      return objectAssign(
        {},
        state,
        {
          loading: false,
          carId: action.carId,
          error: action.error,
        });

    default:
      return state;
  }
}
