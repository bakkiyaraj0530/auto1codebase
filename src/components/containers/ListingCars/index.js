/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */
// eslint object-shorthand: "error"
/* eslint-env es6 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import Filter from '../../components/Filter';
import CarList from '../../components/CarList';
import * as actions from '../../../actions/listingCarsActions';
import LoadingIndicator from '../../components/LoadingIndicator';

export class ListingCars extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const defaultQ = {
      page: 1,
    };
    this.props.actions.getCarsData(defaultQ);
    this.props.actions.getColors();
    this.props.actions.getManufactors();
  }
  state = {
    selectedOption: null,
    currentPage: 1,
  }

  handleChangeColor = (colorOption) => {
    this.setState({ colorOption });
  }

  handleChangeManuf = (manufOption) => {
    this.setState({ manufOption });
  }

  handleSort = (sortOption) => {
    this.setState({ sortOption });
    const { colorOption, manufOption } = this.state;
    const filterQ = {
      color: colorOption && colorOption.value,
      manufacturer: manufOption && manufOption.value,
      sort: sortOption.value,
      page: 1,
    };
    this.props.actions.getCarsData(filterQ);
  }

  handleSubmit = evt => {
    evt.preventDefault();
    const { colorOption, manufOption } = this.state;
    const filterQ = {
      color: colorOption.value,
      manufacturer: manufOption.value,
      page: 1,
    };
    this.props.actions.getCarsData(filterQ);
  };

  handlePageChange = pageNumber => {
    this.setState({ currentPage: pageNumber });
    const { colorOption, manufOption } = this.state;

    const listQuery = {
      color: colorOption && colorOption.value,
      manufacturer: manufOption && manufOption.value,
      page: pageNumber,
    };
    const pageQuery = colorOption && colorOption.value || manufOption && manufOption.value ? listQuery : { page: pageNumber, };
    this.props.actions.getCarsData(pageQuery);
  };

  getOptions = mapString => {
    let colorOptions;
    if (mapString) {
      const InnerObject = Object.getOwnPropertyNames(mapString)[0] === 'colors'
        ? mapString.colors
        : mapString.manufacturers;
      colorOptions = InnerObject.map(item => {
        const optionsObj = {
          value: item.name ? item.name : item,
          label: item.name
            ? item.name.charAt(0).toUpperCase() + item.name.slice(1)
            : item.charAt(0).toUpperCase() + item.slice(1),
        };
        return optionsObj;
      });
    }
    return colorOptions;
  };

  render() {
    const { carlist, allcolors, allmanuF } = this.props.listingCars;
    const defaultQs = {
      page: 1,
    };
    const { colorOption, manufOption, sortOption, currentPage } = this.state;
    if(this.props.loading) {
      return <LoadingIndicator />
    }
    return (
      <article>
        <div className="main-container">
          <div className="left-container">
            <Filter
              handleSubmit={this.handleSubmit}
              colorsList={this.getOptions(allcolors && allcolors.data)}
              manufacturerList={this.getOptions(allmanuF && allmanuF.data)}
              handleChangeColor={this.handleChangeColor}
              handleChangeManuf={this.handleChangeManuf}
              colorOption={colorOption}
              manufOption={manufOption}
              filterQ={defaultQs}
            />
          </div>
          {carlist && <CarList
            carslist={carlist.data}
            onSort={this.onSort}
            handleSort={this.handleSort}
            sortOption={sortOption}
            handlePageChange={this.handlePageChange}
            currentPage={currentPage}
          // viewCarDetails={this.viewCarDetails}
          />}
        </div>
      </article>
    );
  }
}

ListingCars.propTypes = {
  listingCars: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  loadCars: PropTypes.func,
  loading: PropTypes.bool,
  carslist: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  color: PropTypes.string,
  manufacturer: PropTypes.string,
  onChangeColor: PropTypes.func,
  onChangeManufacturer: PropTypes.func,
  allManufacturers: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  allcolors: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  loadColors: PropTypes.func,
  loadManufacturers: PropTypes.func,
  goDetails: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    listingCars: state.listingCars
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListingCars));

