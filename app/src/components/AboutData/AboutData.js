import React from 'react';

import './aboutdata.css';

function AboutData() {
  return (
    <div className="AboutData-container">
      <div className="AboutData-header">
        <h3>About the Data</h3>
      </div>

      <div className="AboutData-body">
        <p>
          The source of this data is the <span><a href="https://data.seattle.gov/Public-Safety/Seattle-Police-Department-Police-Report-Incident/7ais-f98f">Seattle Police Department Police Report Incidents</a></span> data set, published on <span><a href="https://data.seattle.gov/">data.seattle.gov</a></span>. Incident report information is published approximately 6 to 12 hours after the report is filed. This application updates its database daily.

          Currently, the data seen in this application represents police incident reports from the last six months for 12 types of incidents.
        </p>
      </div>
    </div>
  )
}

export default AboutData;
