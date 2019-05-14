/*
 * Lising Car page
 *
 * This is the first thing users see of our App, at the '/' route
 */
// eslint object-shorthand: "error"
/* eslint-env es6 */

import React from 'react';

import { mount, shallow } from "enzyme";
import { ListingCars } from "./index";
import Filter from '../../components/Filter';
import CarList from '../../components/CarList';

describe("<ListingCars />", () => {
  const actions = {
    getCarsData: jest.fn(),
    getColors: jest.fn(),
    getManufactors: jest.fn(),
    handleSubmit: jest.fn(),
  };

  const initialValue = {
    listingCars: {
      loading: false,
      error: false,
      sort: '',
      payload: 'false',
      color: 'red',
      manuF: 'audi',
      allcolors: false,
      allcolorserror: '',
      allmanuFerror: '',
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
    },
  };
  const wrapper = shallow(
    <ListingCars
      actions={actions}
      listingCars={initialValue.listingCars}
    />
  );
  it("should contain <Filter Form />", () => {
    expect(wrapper.find(Filter).length).toEqual(1);
    expect(wrapper.find(CarList).length).toEqual(1);
  });

  it("calls onSubmit upon clicking Filter", () => {
    const wrapper = mount(
      <ListingCars
        actions={actions}
        listingCars={initialValue.listingCars}
      />
    );
    wrapper.setState({ colorOption: { value: 'Blue' }, manufOption: { value: 'AUDI' }, });

    const filter = wrapper.find('button[type="submit"]');
    filter.simulate("submit", {
      preventDefault: () => { }
    }
    );
    expect(wrapper.state().colorOption.value).toEqual('Blue');
    expect(wrapper.state().manufOption.value).toEqual('AUDI');
    
  });


});

