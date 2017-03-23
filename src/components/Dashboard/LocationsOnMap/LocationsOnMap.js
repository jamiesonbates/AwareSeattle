import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setMapZoom } from '../../../actions/mapZoomAction';
import { setMapCenter } from '../../../actions/mapCenterAction';
import { setSelectedLocation } from '../../../actions/setSelectedLocationAction';

import './locationsonmap.css';

class LocationsOnMap extends Component {
  constructor() {
    super();

    this.handleLocationClick = this.handleLocationClick.bind(this);;
  }

  handleLocationClick(zoom, coords, identity) {
    this.props.dispatch(setMapZoom(zoom));
    this.props.dispatch(setMapCenter(coords));
    this.props.dispatch(setSelectedLocation(identity))
  }

  render() {
    return (
      <div className="LocationsOnMap-container">
        {
          this.props.locations.combinedLocations.map((location, i) => (
            <button
              key={i}
              onClick={() => this.handleLocationClick(16, { lat: location.lat, lng: location.lng }, location.identity)}
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
    locations: store.locations,
  }
}

export default connect(mapStateToProps)(LocationsOnMap);
