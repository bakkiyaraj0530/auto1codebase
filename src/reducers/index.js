import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import listingCars from './listingCarReducer';
import carDetails from './carDetailsReducer';

const rootReducer = combineReducers({
  fuelSavings,
  listingCars,
  carDetails,
});

export default rootReducer;
