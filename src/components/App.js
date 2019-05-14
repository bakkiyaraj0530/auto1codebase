/* eslint-disable import/no-named-as-default */
import { Route, Switch } from "react-router-dom";

import ListingCars from './containers/ListingCars';
import CarDetails from './containers/CarDetails';

import NotFoundPage from "./NotFoundPage";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import { Helmet } from 'react-helmet';

import Header from '../components/components/Header';
import Footer from '../components/components/Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Helmet titleTemplate="AUTO 1, Car portal" defaultTitle="Car portal Task">
            <meta
              name="description"
              content="Car Portal - Search and details page"
            />
          </Helmet>
          <Header />
        </div>
        <Switch>
          <Route exact path="/" component={ListingCars} />
          <Route path="/details" component={CarDetails} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
