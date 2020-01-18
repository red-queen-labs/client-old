import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { connect } from 'react-redux';
import { triggerAlert } from '../redux/actionCreators/alert';

const Home = ({ alerts, triggerAlert }) => {
  return (
    <Layout>
      <h1>Housing Indexing App</h1>

      <button
        onClick={() => {
          triggerAlert();
          console.log('triggered alerts:', alerts);
        }}
      >
        Dispatch Set Alert
      </button>
    </Layout>
  );
};

const mapState = state => ({
  alerts: state.alerts,
});

export default connect(mapState, { triggerAlert })(Home);
