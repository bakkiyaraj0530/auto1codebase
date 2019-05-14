import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import Form from './Form';

export class Filter extends React.Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    const { handleSubmit, handleChangeColor, colorOption, colorsList, handleChangeManuf, manufOption, manufacturerList } = this.props;
    
    return (
      <div className="filter-wrapper">
        <Form onSubmit={handleSubmit}>
          <label htmlFor="color">Color</label>
          <div className="custom-select">
            <Select
              id="color"
              name="color"
              placeholder="All car colors"
              className="select-box"
              onChange={handleChangeColor}
              value={colorOption}
              options={colorsList}
            />
          </div>
          <label htmlFor="manufacturer">Manufacturer</label>
          <div className="custom-select">
            <Select
              id="manufacturer"
              name="manufacturer"
              placeholder="All manufacturers"
              className="select-box"
              onChange={handleChangeManuf}
              value={manufOption}
              options={manufacturerList}
            />
          </div>
          <button type="submit" className="filter-btn custom-btn">
            Filter
        </button>
        </Form>
      </div>
    );
  }
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
