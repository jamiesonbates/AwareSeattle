import React from 'react';
import Moment from 'moment';

import './status.css';

function Status(props) {
  let locationCount = props.locations.combinedLocations.length;
  const locationIsSelected = props.locations.locationIsSelected;
  console.log(locationIsSelected);
  const start = Moment(props.timeFilter.startingMilliseconds);
  const end = Moment(props.timeFilter.endingMilliseconds);
  let diff = Math.round(end.diff(start, 'months', true));

  if (locationIsSelected) {
    locationCount = 1;
  }

  if (diff > 1) {
    diff += ' months';
  }
  else {
    diff += ' month';
  }

  return (
    <div className="Status-container">
      <h3>What's in this map?</h3>
      <p>Police incident reports from the last <span className="Status-diff">{diff}</span> within 500 meters of <span className="Status-location">{locationCount} locations</span> in Seattle, WA.
      </p>
    </div>
  )
}

export default Status;
