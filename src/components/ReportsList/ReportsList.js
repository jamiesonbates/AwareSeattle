import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'moment';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import { authenticateUser } from '../../actions/authenticateAction';
import { getReportsList } from '../../actions/getReportsListAction';

import './reportslist.css';

class ReportsList extends Component {
  componentWillMount() {
    this.props.dispatch(authenticateUser());

    const { lat, lng, range, offenseId } = this.props.params;
    const offenseFilterForList = this.props.offenseFilterForList;
    const timeFilter = this.props.timeFilter;

    const areOffenses = parseInt(offenseId);

    if (areOffenses) {
      this.props.dispatch(getReportsList(lat, lng, range, timeFilter, offenseId));
    }
    else {
      console.log('here');
      this.props.dispatch(getReportsList(lat, lng, range, timeFilter, offenseFilterForList));
    }
  }

  render() {
    return (
      <div className="ReportsList-container">
        <Nav {...this.props}/>
        <div className="ReportsList-list-container">
          <div className="ReportsList-header">
            <h3>Incident Reports</h3>
          </div>

          <div className="ReportsList-list">
            <div className="ReportsList-list-headers">
              <div className="ReportsList-generaloffensenumber">
                <h4>General Offense Number</h4>
              </div>

              <div className="ReportsList-dateoccurred">
                <h4>Date Occurred</h4>
              </div>

              <div className="ReportsList-hundredblock">
                <h4>Hundred Block</h4>
              </div>

              <div className="ReportsList-offensename">
                <h4>Offense Name</h4>
              </div>

              <div className="ReportsList-offensetype">
                <h4>Specific Name</h4>
              </div>
            </div>

            <div className="ReportsList-list-data">
              {
                this.props.activeReportsForList.map((report, id) => (
                  <div className="ReportsList-row" key={id}>
                    <p className="ReportsList-generaloffensenumber">
                      {report.general_offense_number}
                    </p>

                    <p className="ReportsList-dateoccurred">
                      {Moment(report.date_occurred).format('MM-DD-YYYY')}
                    </p>

                    <p className="ReportsList-hundredblock">
                      {report.hundred_block}
                    </p>

                    <p className="ReportsList-offensename">
                      {report.offense_name}
                    </p>

                    <p className="ReportsList-offensetype">
                      {report.specific_offense_type}
                    </p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

const mapStateToProps = function(store) {
  return {
    offenseFilterForList: store.offenseFilter.filterByOffenses,
    timeFilter: store.timeFilter,
    activeReportsForList: store.policeReports.activeReportsForList,
    isAuthenticated: store.user.isAuthenticated
  }
}

export default connect(mapStateToProps)(ReportsList);
