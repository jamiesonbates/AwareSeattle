import React from 'react';

import './aboutproject.css';

function AboutProject() {
  return (
    <div className="AboutProject-container">
      <div className="AboutProject-header">
        <h3>About this Project</h3>
      </div>

      <div className="AboutProject-body">
        <p>
          This project aims to deliver up-to-date, discoverable information on police incident reports in Seattle, WA.

          The source code for this project can be found <span><a href="https://github.com/jamiesonbates/Capstone-Frontend">on Github</a></span>.
        </p>
      </div>
    </div>
  )
}

export default AboutProject;
