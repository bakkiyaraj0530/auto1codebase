import * as ActionTypes from '../constants/actionTypes';
import reducer from './listingCarReducer';

describe('Reducers::FuelSavings', () => {
  const getInitialState = () => {
    return {
      loading: false,
      error: false,
      carlist: '',
      sort: '',
      payload: 'false',
      color: 'red',
      manuF: 'audi',
      allcolors: false,
      allcolorserror: '',
      allmanuFerror: '',
    };
  };

  const getAppState = (isLoading) => {
    return {
      loading: isLoading,
      error: false,
      carlist: '',
      sort: '',
      payload: 'false',
      color: 'red',
      manuF: 'audi',
      allcolors: false,
      allcolorserror: '',
      allmanuFerror: '',
    };
  };

  const payload = {
    page: 1,
    // loading: false,
    // error: false,
  };

  const sort = {
    sort: 'asc'
  }

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();

    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should handle GET_CARS_LIST', () => {
    const action = { type: ActionTypes.GET_CARS_LIST, payload };
    const expected = Object.assign(getAppState(true), { payload });

    expect(reducer(getAppState(true), action)).toEqual(expected);
  });

  it('should handle SORT_CARS', () => {
    const action = { type: ActionTypes.SORT_CARS, sort };
    const expected = Object.assign(getAppState(true), { sort });

    expect(reducer(getAppState(true), action)).toEqual(expected);
  });

  it('should handle GET_CARS_LIST_SUCCESS', () => {
    const carlist = {
      carlist: {
        color: "blue",
        fuelType: "Diesel",
        manufacturerName: "Fiat",
        mileage: { number: 100081, unit: "km" },
        number: 100081,
        unit: "km",
        modelName: "Palio",
        pictureUrl: "http://localhost:3001/car.svg",
        stockNumber: 94549,
      },
      loading: false,
    }
    const action = { type: ActionTypes.GET_CARS_LIST_SUCCESS, carlist };
    const expected = Object.assign(getAppState(false), { carlist });
    expect(reducer(getAppState(false), action)).toEqual(expected);
  });

  it('should handle GET_CARS_LIST_FAILURE', () => {
    const error = 'fail';
    const action = { type: ActionTypes.GET_CARS_LIST_FAILURE, error };
    const expected = Object.assign(getAppState(false), { error });
    expect(reducer(getAppState(false), action)).toEqual(expected);
  });

  it('should handle GET_COLORS_SUCCESS', () => {
    const allcolors = {
      allcolors: [
        'Blue',
        'yellow',
        'Green',
        'Black',
      ],
    };
    const action = { type: ActionTypes.GET_COLORS_SUCCESS, allcolors };
    const expected = Object.assign(getAppState(false), { allcolors });
    expect(reducer(getAppState(false), action)).toEqual(expected);
  });

  it('should handle GET_COLORS_FAILURE', () => {
    const allcolorserror = {
      allcolorserror: 'Fail to Fetch Colors Data',
    };
    const action = { type: ActionTypes.GET_COLORS_FAILURE, allcolorserror };
    const expected = Object.assign(getAppState(false), { allcolorserror });
    expect(reducer(getAppState(false), action)).toEqual(expected);
  });
  it('should handle GET_MANUFACTORERS_SUCCESS', () => {
    const allmanuF = {
      allmanuF: [
        'Audi',
        'Benz',
        'BMW',
        'Fiat',
      ],
    };
    const action = { type: ActionTypes.GET_MANUFACTORERS_SUCCESS, allmanuF };
    const expected = Object.assign(getAppState(false), { allmanuF });
    expect(reducer(getAppState(false), action)).toEqual(expected);
  });

  it('should handle GET_MANUFACTORERS_FAILURE', () => {
    const allmanuFerror = null || undefined;

    const action = { type: ActionTypes.GET_MANUFACTORERS_FAILURE, allmanuFerror };
    const expected = Object.assign(getAppState(false), { allmanuFerror });
    expect(reducer(getAppState(false), action)).toEqual(expected);
  });

});
