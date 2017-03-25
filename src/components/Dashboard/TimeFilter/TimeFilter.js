import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider, { Range } from 'rc-slider';
import DatePicker from 'react-datepicker';
import Moment from 'moment';

import { setTimeFilter } from '../../../actions/setTimeFilterAction';

import 'react-datepicker/dist/react-datepicker.css';
import 'rc-slider/assets/index.css';
import './timefilter.css';

class TimeFilter extends Component {
  constructor() {
    super();

    this.state = {
      endDate: Moment(),
      startDate: Moment().subtract(30, 'days'),
      includeDates: []
    }

    this.updateMap = this.updateMap.bind(this);
    this.onStartDateChange = this.onStartDateChange.bind(this);
    this.onEndDateChange = this.onEndDateChange.bind(this);
  }

  componentWillMount() {
    const includeDates = [];

    for (let i = 0; i <= 180; i++) {
      includeDates.push(Moment().subtract(i, 'days'));
    }

    this.setState({
      includeDates
    })
  }

<<<<<<< HEAD
    if (timeBetween > 170) {
      timeBetween = '6 months';
    }
    else if (timeBetween >= 62) {
      timeBetween = `${end.diff(start, 'months')} months`;
    }
    else if (timeBetween < 62) {
      timeBetween = `${end.diff(start, 'months')} month`;
    }
    else {
      timeBetween = `${timeBetween} days`;
=======
  onStartDateChange(day) {
    if (this.state.endDate.valueOf() < day.valueOf()) {
      day = this.state.endDate.subtract(1, 'days');
>>>>>>> time
    }

    this.setState({
      startDate: day
    })
  }

  onEndDateChange(day) {
    if (this.state.startDate.valueOf() > day.valueOf()) {
      day = this.state.startDate.add(1, 'days');
    }

    this.setState({
      endDate: day
    })
  }

  updateMap() {
    const startDate = this.state.startDate;
    const endDate = this.state.endDate;
    this.props.dispatch(setTimeFilter(startDate, endDate));
  }

  render() {
    return (
      <div className="TimeFilter-container">
        <div className="TimeFilter-header">
          <h3>Filter by Date of Crime</h3>
        </div>
        <div className="TimeFilter-body-container">
          <div className="TimeFilter-datepicker-container">
            <div className="TimeFilter-datepicker">
              <h4>Start Date</h4>

              <DatePicker
                selected={this.state.startDate}
                onChange={this.onStartDateChange}
                includeDates={this.state.includeDates}/>
            </div>

            <div className="TimeFilter-datepicker">
              <h4>End Date</h4>

              <DatePicker
                selected={this.state.endDate}
                onChange={this.onEndDateChange}
                includeDates={this.state.includeDates}/>
            </div>
          </div>

          <button
            className="TimeFilter-btn"
            onClick={this.updateMap}>
            Update Map
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = function(store) {
  return {
    startDate: store.timeFilter.startDate,
    endDate: store.timeFilter.endDate,
    timeBetween: store.timeFilter.timeBetween
  }
}

export default connect(mapStateToProps)(TimeFilter);
