import React, { Component } from 'react';

import './addalert.css';

class AddAlert extends Component {
  constructor() {
    super();

    this.state = {
      userAlertLocationId: '',
      offenseTypeId: '',
      rangeVal: 250,
      rangeMin: 50,
      rangeMax: 500
    }
  }

  handleLocationChange(e) {
    this.setState({
      userAlertLocationId: e.target.value
    })
  }

  handleOffenseChange(e) {
    this.setState({
      offenseTypeId: e.target.value
    })
  }

  handleRangeChange(e) {
    this.setState({
      rangeVal: e.target.value
    })
  }

  handleSubmit(e) {
    console.log(this.props.user);
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    const locations = this.props.locations;

    return (
      <div className="AddAlert-container">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="AddAlert-input-container">
            <div className="AddAlert-input">
              <label>Select a crime</label>
              <select name="offenseTypes" onChange={this.handleLocationChange.bind(this)}>
                {
                  this.props.locations.map(location => (
                    <option
                      key={location.id}
                      value={location.id}>
                      {location.location_title}
                    </option>
                  ))
                }
              </select>
            </div>

            <div className="AddAlert-input">
              <label>Select a crime</label>
              <select
                name="offenseTypes" onChange={this.handleOffenseChange.bind(this)}
              >
                {
                  this.props.offenseTypes.map(offense => (
                    <option
                      key={offense.id}
                      value={offense.id}>
                      {offense.offense_name}
                    </option>
                  ))
                }
              </select>
            </div>

            <div className="AddAlert-input">
              <label>Choose a range</label>
              <input
                type="range"
                value={this.state.rangeVal}
                onChange={this.handleRangeChange.bind(this)}
                min={this.state.rangeMin}
                max={this.state.rangeMax}
              />
            </div>
          </div>

          <button>Add Alert</button>
        </form>
      </div>
    )
  }
}

export default AddAlert;
