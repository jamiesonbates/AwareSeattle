import React, { Component } from 'react';
import Geosuggest from 'react-geosuggest';

import { addNewLocation } from '../../../actions/addNewLocationAction';

import './addlocation.css';

class AddLocation extends Component {
  constructor() {
    super();

    this.state = {
      locationTitle: '',
      locationName: '',
      lat: '',
      lng: ''
    }

    this.updatePlace = this.updatePlace.bind(this);
    this.handleTextInputChange = this.handleTextInputChange.bind(this);
  }

  updatePlace(place) {
    this.setState({
      locationName: place.label,
      lat: place.location.lat,
      lng: place.location.lng
    })
  }

  handleTextInputChange(e) {
    this.setState({
      locationTitle: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    const userId = this.props.userId;
    const locationTitle = this.state.locationTitle;
    const locationName = this.state.locationName;
    const lat = this.state.lat;
    const lng = this.state.lng;

    this.props.dispatch(addNewLocation(userId, locationTitle, locationName, lat, lng));
  }

  render() {
    return (
      <div className="AddLocation-container">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="AddLocation-input-container">
            <div className="AddLocation-input">
              <label>Name this location</label>
              <input type="text" value={this.state.locationTitle} onChange={this.handleTextInputChange}/>
            </div>

            <div className="AddLocation-input">
              <label>Enter a location</label>
              <Geosuggest onSuggestSelect={(place) => this.updatePlace(place)} />
            </div>
        </div>

        <button>Add Location</button>
        </form>
      </div>
    )
  }
}

export default AddLocation;

{/* <div className="AddLocation-input">
  <label>Select a crime</label>
  <select name="offenseTypes" onChange={this.handleSelectChange}>
    {
      this.props.offenseTypes.map(offense => (
        <option key={offense.id} value={offense.id}>{offense.offense_name}</option>
      ))
    }
  </select>
</div> */}

{/* <div className="AddLocation-input">
  <label>Range</label>
  <input
    type="range"
    value={this.state.rangeVal}
    onChange={this.handleRangeChange}
    min={this.state.rangeMin}
    max={this.state.rangeMax}
  />
</div> */}
