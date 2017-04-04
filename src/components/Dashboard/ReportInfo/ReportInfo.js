import React from 'react';
import Moment from 'moment';

import FaInfoCircle from 'react-icons/lib/fa/info-circle';
import './reportinfo.css';

function ReportInfo(props) {
  const report = props.report;
  console.log(report);
  const reportSelected = Object.keys(props.report).length > 0;

  return (
    <div className="ReportInfo-container">
      <div className="ReportInfo-header">
        <div className="ReportInfo-title-container">
          <FaInfoCircle className="ReportInfo-icon"/>
          <h3>Incident Information</h3>
        </div>
        {
          reportSelected ?
            <div
              style={{ backgroundColor: report.color }} className="ReportInfo-indicator">
            </div>
          :
            <div
              style={{ backgroundColor: 'white' }} className="ReportInfo-indicator">
            </div>

        }
      </div>

      <div className="ReportInfo-body-container">
        {
          reportSelected ?
            <div className="ReportInfo-body">
              <div className="ReportInfo-stat">
                <h4>Date Occurred</h4>
                <p>{Moment(report.date_occurred).format('MM-DD-YYYY, HH:mm A')}</p>
              </div>

              <div className="ReportInfo-stat">
                <h4>Hundred Block</h4>
                <p>{report.hundred_block}</p>
              </div>

              <div className="ReportInfo-stat">
                <h4>Offense Name</h4>
                <p>{report.offense_name}</p>
              </div>

              <div className="ReportInfo-stat">
                <h4>Specific Name</h4>
                <p>{report.specific_offense_type}</p>
              </div>
            </div>
          :
            <h4>Select an Incident on the Map to See Details</h4>
        }
      </div>
    </div>
  )
}

export default ReportInfo;
