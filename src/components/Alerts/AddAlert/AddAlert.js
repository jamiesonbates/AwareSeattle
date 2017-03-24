import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';

import { addNewAlert } from '../../../actions/addAlertAction';

import 'react-select/dist/react-select.css';
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

    this.buildOptions = this.buildOptions.bind(this);
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

  buildOptions(optionSet) {
    const options = [];

    for (const option of optionSet) {
      let label;

      if (option.location_title) {
        label = option.location_title;
      }
      else {
        label = option.offense_name;
      }

      const opt = {
        value: option.id,
        label
      }

      options.push(opt);
    }

    return options;
  }

  handleSubmit(e) {
    e.preventDefault();
    const userId = this.props.userId;
    const offenseTypeId = this.state.offenseTypeId;
    const range = this.state.rangeVal;
    let userAlertLocationId;

    if (this.props.locations.length === 1) {
      userAlertLocationId = this.props.locations[0].id;
    }
    else {
      userAlertLocationId = this.state.userAlertLocationId;
    }

    this.props.dispatch(addNewAlert(userId, userAlertLocationId, offenseTypeId, range));
  }

  render() {
    const locations = this.props.userLocations;
    const offenses = this.props.offenseTypes;
    console.log(offenses);
    console.log(locations);

    const locationOptions = this.buildOptions(locations);
    const offenseOptions = this.buildOptions(offenses);

    return (
      <div className="AddAlert-container">
        <h3>Add a New Alert</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="AddAlert-input-container">
            <div className="AddAlert-input">
              <label>Select a location</label>
              <Select
                name="locations"
                value="Select a Location"
                options={locationOptions}
                onChange={this.handleLocationChange.bind(this)}
              />
            </div>

            <div className="AddAlert-input">
              <label>Select a crime</label>
              <Select
                name="offenses"
                value="Select an offense"
                options={offenseOptions}
                onChange={this.handleOffenseChange.bind(this)}
              />
            </div>

            <div className="AddAlert-input">
              <label>Range: <span className="AddAlert-range-val">{this.state.rangeVal} meters</span></label>
              <input
                type="range"
                value={this.state.rangeVal}
                onChange={this.handleRangeChange.bind(this)}
                min={this.state.rangeMin}
                max={this.state.rangeMax}
              />
            </div>
          </div>

          <div className="AddAlert-btn-container">
            <button className="AddAlert-btn">Add Alert</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = function(store) {
  return {
    offenseTypes: store.offenseTypes.offenseTypes,
    userLocations: store.locations.userLocations,
    userId: store.user.userId
  }
}

export default connect(mapStateToProps)(AddAlert);
