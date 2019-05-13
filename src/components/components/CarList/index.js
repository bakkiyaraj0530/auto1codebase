import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import Pagination from 'react-js-pagination';
import Thumbimage from '../../../assets/images/thumb-image.jpg';

class CarList extends React.Component {

  static contextTypes = {
    router: PropTypes.object
  }

  state = {
    options: [
    { value: 'asc', label: 'Mileage - Ascending' },
    { value: 'des', label: 'Mileage - Decending' },
  ]};

  viewCarDetails = item => {
    this.context.router.history.push(
      {
       pathname: '/details',
          state: {
            item,
          },
      }
    );
  };
  
  render() {
    const displayCars = this.props.carslist &&

    this.props.carslist.
      cars.map((item, index) => (
        <div key={index} className="result-wrapper">
          <img className="thumb-image" src={Thumbimage} alt="" />
          <div className="content-section">
            <p className="title">{item.modelName}</p>
            <p className="description">
              stock #{item.stockNumber} - {item.mileage.number}
              {item.mileage.unit.toUpperCase()} - {item.fuelType} - {item.color}
            </p>
            <a
              href="javascript:void(0)"
              className="link"
              onClick={() => this.viewCarDetails(item)}
            >
              View Details
            </a>
          </div>
        </div>
      )
      );
  return (
    <div className="right-container">
      <div className="head-wrapper">
        <div className="text-wrapper">
          <p className="bold-text">Available cars</p>
          <p className="results">
            Showing <span>{this.props.currentPage}0</span> of <span>100</span> results
          </p>
        </div>
        <div className="sort-section">
          <label htmlFor="manufacturer">Sort by</label>
          <div className="custom-select">
            <Select
              id="sort"
              name="sort"
              placeholder="None"
              className="select-box"
              onChange={this.props.handleSort}
              value={this.props.colorOption}
              options={this.state.options}
            />
          </div>
        </div>
      </div>
      <div className="results-container">{displayCars}</div>
      <div className="pagination">
        <Pagination
          itemClassFirst="link"
          itemClassPrev="link"
          itemClassNext="link"
          itemClassLast="link"
          innerClass="page-number"
          itemClass="page-number"
          prevPageText="Prev"
          nextPageText="Next"
          firstPageText="First"
          lastPageText="Last"
          activePage={this.props.currentPage}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={3}
          onChange={this.props.handlePageChange}
        />
      </div>
    </div>
  );
  }
}

CarList.propTypes = {
  carslist: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  colorOption: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  handleSort: PropTypes.func,
  sortOption: PropTypes.object,
  handlePageChange: PropTypes.func,
  currentPage: PropTypes.object,
  goDetails: PropTypes.func,
};

export default CarList;
