import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import Form from './Form';

function Filter(props) {
  return (
    <div className="filter-wrapper">
      <Form onSubmit={props.handleSubmit}>
        <label htmlFor="color">Color</label>
        <div className="custom-select">
          <Select
            id="color"
            name="color"
            placeholder="All car colors"
            className="select-box"
            onChange={props.handleChangeColor}
            value={props.colorOption}
            options={props.colorsList}
          />
        </div>
        <label htmlFor="manufacturer">Manufacturer</label>
        <div className="custom-select">
          <Select
            id="manufacturer"
            name="manufacturer"
            placeholder="All manufacturers"
            className="select-box"
            onChange={props.handleChangeManuf}
            value={props.manufOption}
            options={props.manufacturerList}
          />
        </div>
        <button type="submit" className="filter-btn custom-btn">
          Filter
        </button>
      </Form>
    </div>
  );
}

Filter.propTypes = {
  handleSubmit: PropTypes.func,
  manufacturerList: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onChangeColor: PropTypes.func,
  colorsList: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  handleChangeColor: PropTypes.func,
  handleChangeManuf: PropTypes.func,
  colorOption: PropTypes.object,
  manufOption: PropTypes.object,
};

export default Filter;
