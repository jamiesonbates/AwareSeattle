import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Moment from 'moment';

import './status.css';

class Status extends Component {
  render() {
    return (
      <div className="Status-container">
        <div className="Status-header">
          <h3>What's in this map?</h3>
          <div className="Status-data-disclaimer">
            <p>Data Updated Every 24 Hours</p>
          </div>
        </div>
        <div className="Status-info">
          <div className="Status-updating">
            <p>
              Police incident reports from the last <span className="Status-diff">{this.props.status.diff}</span> within 500 meters of <span className="Status-location">{this.props.status.locationCount} locations</span> in Seattle, WA.
            </p>
          </div>
          <div className="Status-button-container">
            {
              this.props.locationIsSelected ?
                <Link
                  to={`/reports/${this.props.status.lat}/${this.props.status.lng}/500/false`}
                  className="Status-btn">
                  Incident List for "{this.props.status.name}"
               </Link>
              :
              <button className="Status-btn Status-btn-inactive">See List of Incidents</button>
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = function(store) {
  return {
    locationIsSelected: store.locations.locationIsSelected,
    status: store.status
  }
}

export default connect(mapStateToProps)(Status);
