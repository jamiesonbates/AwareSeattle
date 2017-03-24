import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider, { Range } from 'rc-slider';
import Moment from 'moment';

import { setTimeFilter } from '../../../actions/setTimeFilterAction';

import 'rc-slider/assets/index.css';
import './timefilter.css';

class TimeFilter extends Component {
  constructor() {
    super();

    this.state = {
      currentRange: [0, 30],
      startDate: Moment().format('MM-DD-YYYY'),
      endDate: Moment().subtract(30, 'days').format('MM-DD-YYYY'),
      timeBetween: '1 month',
      startingMilliseconds: Moment().subtract(30, 'days').valueOf(),
      endingMilliseconds: Moment().subtract(0, 'days').valueOf()
    }
    this.handleRangeChange = this.handleRangeChange.bind(this);
    this.setNewRange = this.setNewRange.bind(this);
  }

  handleRangeChange(value) {
    // Convert value into days since "0"
    const startValue = ((value[1] * -1) + 180);
    const endValue = ((value[0] * -1) +180);

    // Calculate milliseconds in Unix timestamp
    const startingMilliseconds = Moment().subtract(endValue, 'days').valueOf();
    const endingMilliseconds = Moment().subtract(startValue, 'days').valueOf();

    // Calculate start and end date of range handles (i.e. 01-01-1990)
    const startDate = Moment().subtract(endValue, 'days').format('MM-DD-YYYY');
    const endDate = Moment().subtract(startValue, 'days').format('MM-DD-YYYY');

    // Calculate time between range handles (in days or months)
    const start = Moment().subtract(endValue, 'days');
    const end = Moment().subtract(startValue + 1, 'days');
    let timeBetween = end.diff(start, 'days');
    console.log(timeBetween);

    if (timeBetween > 170) {
      timeBetween = '6 months';
    }
    else if (timeBetween > 29) {
      timeBetween = `${end.diff(start, 'months')} months`;
    }
    else if (timeBetween < 60) {
      timeBetween = `${timeBetween} month`;
    }
    else {
      timeBetween = `${timeBetween} days`;
    }

    this.setState({
      currentRange: value,
      startDate,
      endDate,
      timeBetween,
      startingMilliseconds,
      endingMilliseconds
    })
  }

  setNewRange() {
    this.props.dispatch(setTimeFilter(this.state.startingMilliseconds, this.state.endingMilliseconds));

  }

  render() {
    return (
      <div className="TimeFilter-container">
        <div className="TimeFilter-header">
          <h3>Filter by Date of Crime</h3>
        </div>
        <div className="TimeFilter-body-container">
          <div>
            <h4>Change map and view {this.state.timeBetween} {this.state.startDate} and {this.state.endDate}</h4>
          </div>
          <Range
            defaultValue={[150, 180]}
            min={0}
            max={180}
            allowCross={false}
            onAfterChange={this.handleRangeChange}/>
            {this.state.timeBetween} between {this.state.startDate} and {this.state.endDate}
          <button
            onClick={this.setNewRange}>
            Update Map
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = function(store) {
  return {

  }
}

export default connect(mapStateToProps)(TimeFilter);
