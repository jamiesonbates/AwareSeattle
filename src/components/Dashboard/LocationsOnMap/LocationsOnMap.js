import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setMapZoom } from '../../../actions/mapZoomAction';
import { setMapCenter } from '../../../actions/mapCenterAction';
import { setSelectedLocation } from '../../../actions/setSelectedLocationAction';

import FaListUl from 'react-icons/lib/fa/list-ul';
import './locationsonmap.css';

class LocationsOnMap extends Component {
  constructor() {
    super();

    this.handleLocationClick = this.handleLocationClick.bind(this);;
  }

  handleLocationClick(zoom, coords, identity, e) {
    const buttons = document.querySelectorAll('.LocationsOnMap-btn');

    if (e.target.classList.contains('LocationsOnMap-btn-selected')) {
      e.target.classList.remove('LocationsOnMap-btn-selected');

      this.props.dispatch(setMapZoom(14));
      this.props.dispatch(setSelectedLocation('clear'));

      return;
    }

    buttons.forEach((button) => {
      if (button === e.target) {
        e.target.classList.add('LocationsOnMap-btn-selected');
      }
      else {
        button.classList.remove('LocationsOnMap-btn-selected');
      }
    });

    this.props.dispatch(setMapZoom(zoom));
    this.props.dispatch(setMapCenter(coords));
    this.props.dispatch(setSelectedLocation(identity))
  }

  render() {
    return (
      <div className="LocationsOnMap-container">
        <div className="LocationsOnMap-title">
          <FaListUl className="LocationsOnMap-icon"/>
          <h3>Locations</h3>
        </div>
        {
          this.props.locations.combinedLocations.map((location, i) => (
            <button
              key={i}
              onClick={(e) => this.handleLocationClick(16, { lat: location.lat, lng: location.lng }, location.identity, e)}
              className="LocationsOnMap-btn">
              {location.location_title}
            </button>
          ))
        }
        <div className="LocationsOnMap-guide">
          <div className="LocationsOnMap-selected-container">
            <div className="LocationsOnMap-selected"></div>
            <p>Selected</p>
          </div>
          <div className="LocationsOnMap-selected-container">
            <div className="LocationsOnMap-notselected"></div>
            <p>Not selected</p>
          </div>
        </div>
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
