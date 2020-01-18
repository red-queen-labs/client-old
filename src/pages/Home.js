import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { triggerAlert } from '../redux/actions/alert';
import { withRouter } from 'react-router-dom';

import { Button } from '@material-ui/core';
import HomeSearchBox from '../components/HomeSearchBox';

const Home = ({ alerts, triggerAlert }) => {
  return (
    <div className="homeContainer">
      <h1>Find more apartments!</h1>
      <h3>Search a city or zip code.</h3>

      <HomeSearchBox />

      <p>We find more apartments than anyone else.</p>
    </div>
  );
};

const mapState = state => ({
  alerts: state.alerts,
});

export default connect(mapState, { triggerAlert })(Home);

// AFFORDABILITY METER
// SIMULATE A SEARCH REQUEST
