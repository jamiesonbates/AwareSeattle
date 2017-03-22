import React from 'react';

import './reportinfo.css';

function ReportInfo(props) {
  console.log('Report Info', props);
  const report = props.report;
  console.log(report);
  return (
    <div>
      <h3>Currently Selected Incident</h3>

      <div>
        <h4>Date Occurred</h4>
        <p>{report.date_occurred}</p>
      </div>

      <div>
        <h4>Hundred Block</h4>
        <p>{report.hundred_block}</p>
      </div>

      <div>
        <h4>Offense Name</h4>
        <p>{report.offense_name}</p>
      </div>

      <div>
        <h4>Offense Name</h4>
        <p>{report.specific_offense_type}</p>
      </div>
    </div>
  )
}

export default ReportInfo;
