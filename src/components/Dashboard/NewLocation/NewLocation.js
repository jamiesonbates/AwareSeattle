import React, { Component } from 'react';
import { connect } from 'react-redux';
import Geosuggest from 'react-geosuggest';

import FaMapMarker from 'react-icons/lib/fa/map-marker';
import { addLocalLocation } from '../../../actions/addLocalLocationAction';

import './newlocation.css';

class NewLocation extends Component {
  constructor() {
    super();

    this.state = {
      locationName: '',
      lat: '',
      lng: ''
    }

    this.updatePlace = this.updatePlace.bind(this);
  }

  updatePlace(place) {
    this.setState({
      lat: place.location.lat,
      lng: place.location.lng
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    const length = this.props.localLocations.length;
    const lat = this.state.lat;
    const lng = this.state.lng;

    this.props.dispatch(addLocalLocation(lat, lng, length))
  }

  render() {
    return (
      <div className="NewLocation-container">
        <div className="NewLocation-header">
          <FaMapMarker className="NewLocation-icon"/>
          <h3>Add a Location</h3>
        </div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <Geosuggest
            ref={el => this.geoSuggest = el}
            onSuggestSelect={(place) => this.updatePlace(place)}
            placeholder={'Enter an address or place'}/>
          <button
            onClick={() => this.geoSuggest.clear()}
            className="NewLocation-btn">
            Update Map
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = function(store) {
  return {
    localLocations: store.locations.localLocations
  }
}

export default connect(mapStateToProps)(NewLocation);
