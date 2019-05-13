/*
 * Car Details page
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Banner from '../../../assets/images/banner-image.jpg';

export class CarDetails extends React.Component {

  constructor(props) {
    super(props);
    this.setState({
      showBtn: true,
    });
  }
  componentDidMount() {
    const id = this.props.location.state.stockNumber;
    const fId = localStorage.getItem(`carStockID-${id}`);
    if(fId) {
      this.setState({ showBtn: false});
    } else {
      this.setState({ showBtn: true});
    }
  }
  toggleFavoritebtn = id => {
    const fId = localStorage.getItem(`carStockID-${id}`);
    if(fId) {
      localStorage.removeItem(`carStockID-${id}`);
      alert('Item has been removed from Favorite.');
      this.setState({ showBtn: true});
    } else {
    localStorage.setItem(`carStockID-${id}`, id);
    alert('Item has been added into Favourite list !!!');
    this.setState({ showBtn: false});
    }
  };

  render() {
    const { item } = this.props.location.state;
    const btnLabel = this.state && this.state.showBtn ? 'Save' : 'Remove';

    return (
       <article>
       <div className="banner-container">
          <img src={Banner} alt="" />
        </div>
          <div className="content-container">
            <div className="details-section">
              <h1 className="title-text">{item.modelName}</h1>
              <h2 className="subtitle-text">
                Stock #{item.stockNumber} - {item.mileage.number}
                {item.mileage.unit.toUpperCase()} - {item.fuelType} - {item.color}
              </h2>
              <p className="description-text">
                This car is currently available and can be delivered as soon as
                 tomorrow morning. Please be aware that delivery times shown in
                  this page are not definitive any may change due to bad weather
             conditions.</p>
            </div>
            <div className="save-box">
              <p className="save-info">
                if you like this car, click the button and save it in your
                collection of favourite items.
              </p>
              <button
                type="button"
                className="save-btn custom-btn"
                onClick={() => this.toggleFavoritebtn(item.stockNumber)}
              >
              {btnLabel}
              </button>
            </div>
          </div>
      </article>
    );
  }
}

CarDetails.propTypes = {
  location: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

function mapStateToProps(state) {
  console.log('dispatch', state);
  return {
  };
}
function mapDispatchToProps(dispatch) {
  console.log('dispatch', dispatch);
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarDetails);
