import React, { Component } from 'react';
import { connect } from 'react-redux';
import Geosuggest from 'react-geosuggest';

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
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  updatePlace(place) {
    this.setState({
      lat: place.location.lat,
      lng: place.location.lng
    })
  }

  handleNameChange(e) {
    this.setState({
      locationName: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    const length = this.props.localLocations.length;

    const locationName = this.state.locationName;
    const lat = this.state.lat;
    const lng = this.state.lng;

    this.props.dispatch(addLocalLocation(locationName, lat, lng, length))
  }

  render() {
    return (
      <div>
        <h2>Add a Location to the Map</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <Geosuggest onSuggestSelect={(place) => this.updatePlace(place)} />
          </div>

          <div>
            <input
              type="text"
              value={this.state.locationName}
              onChange={this.handleNameChange}/>
          </div>

          <button>Add Location</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = function(store) {
  return {
    localLocations: store.localLocations.localLocations
  }
}

export default connect(mapStateToProps)(NewLocation);
