import React, { Component } from 'react';
import { connect } from 'react-redux';

import './locationsonmap.css';

class LocationsOnMap extends Component {
  render() {
    const newLocalLocations = this.props.localLocations.map(location => {
      location.isLocal = true;

      return location;
    })

    const newLocations = this.props.locations.map(location => {
      location.isLocal = false;

      return location;
    })

    const allLocations = newLocalLocations.concat(newLocations);

    console.log('allLocations', allLocations);

    return (
      <div>
        {
          allLocations.map((location, i) => (
            <p key={i}>{location.lat}</p>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = function(store) {
  return {
    locations: store.locations.locations,
    localLocations: store.localLocations.localLocations
  }
}

export default connect(mapStateToProps)(LocationsOnMap);
