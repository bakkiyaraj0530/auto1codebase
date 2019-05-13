import { combineReducers } from 'redux';
import listingCars from './listingCarReducer';

const rootReducer = combineReducers({
  listingCars,
});

export default rootReducer;
