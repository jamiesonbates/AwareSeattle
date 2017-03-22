import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setMapZoom } from '../../../actions/mapZoomAction';
import { setMapCenter } from '../../../actions/mapCenterAction';

import './locationsonmap.css';

class LocationsOnMap extends Component {
  constructor() {
    super();

    this.handleLocationClick = this.handleLocationClick.bind(this);;
  }

  handleLocationClick(zoom, location) {
    this.props.dispatch(setMapZoom(zoom));
    this.props.dispatch(setMapCenter(location));
  }

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
      <div className="LocationsOnMap-container">
        {
          allLocations.map((location, i) => (
            <button
              key={i}
              onClick={() => this.handleLocationClick(16, { lat: location.lat, lng: location.lng })}
              className="LocationsOnMap-btn">
              {location.location_title}
            </button>
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
