import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPoliceReports } from '../actions/policeReportsAction';

import Map from './Map';

class App extends Component {
  componentWillMount() {
    this.props.dispatch(fetchPoliceReports());
  }

  render() {
    console.log(this.props);
    return (
      <div style={{ height: '100vh' }}>
        <h1>Is this finally working?</h1>

        <Map reports={this.props.policeReports}/>
      </div>
    )
  }
}

const mapStateToProps = function(store) {
  return {
    policeReports: store.policeReports
  };
};

export default connect(mapStateToProps)(App);
