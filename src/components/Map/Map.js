import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GoogleMapLoader, GoogleMap, Marker, Circle } from 'react-google-maps';

import { setCurrentReport } from '../../actions/currentReportAction';

class Map extends Component {
  constructor() {
    super();

    this.handleMarkerClick = this.handleMarkerClick.bind(this);
  }

  handleMarkerClick(report) {
    this.props.dispatch(setCurrentReport(report));
  }

  render() {
    console.log(this.props.offenseFilter);
    return (
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapLoader
          containerElement={
            <div
              {...this.props.containerElementProps}
              style={{ height: '100%' }}
            />
          }
          googleMapElement={
            <GoogleMap
              zoom={this.props.mapDetails.mapZoom}
              center={this.props.mapDetails.mapCenter}
              >
                {
                  this.props.userLocations.map((location, i) => {
                    const position = {
                      lat: parseFloat(location.lat),
                      lng: parseFloat(location.lng)
                    }

                    return (
                      <Marker
                        key={i}
                        position={position}
                        info={location}
                        zIndex={2}
                      />
                    );
                  })
                }
                {
                  this.props.mergedReports.map((report, i) => {
                    const position = {
                      lat: parseFloat(report.latitude),
                      lng: parseFloat(report.longitude)
                    }

                    for (const offense of this.props.offenseTypes) {
                      if (report.offense_type_id === offense.id) {
                        report.color = offense.color;
                      }
                    }

                    const icon = {
                      path: window.google.maps.SymbolPath.CIRCLE,
                      fillOpacity: 1,
                      fillColor: report.color,
                      scale: (4 * (this.props.mapDetails.mapZoom / 13)),
                      strokeWeight: 0.1
                    }

                    const offenseFilter = this.props.offenseFilter;

                    if (offenseFilter !== undefined && offenseFilter.includes(report.offense_type_id)) {
                      console.log();
                      return;
                    }

                    return (
                      <Marker
                        key={i}
                        position={position}
                        info={report}
                        icon={icon}
                        optimized={false}
                        zIndex={1}
                        onClick={() => this.handleMarkerClick(report)}
                      />
                    );
                  })
                }

                {/* <Circle
                  center={{ lat: 47.6062, lng: -122.3321 }}
                  radius={500}
                /> */}
              </GoogleMap>
            }
          />
        </div>
      );

  }
}

const mapStateToProps = function(store) {
  return {
    userLocations: store.locations.locations,
    reports: store.policeReports.reports,
    mergedReports: store.policeReports.mergedReports,
    offenseTypes: store.offenseTypes.offenseTypes,
    mapDetails: store.mapDetails,
    offenseFilter: store.offenseFilter.offenseFilter
  }
}

export default connect(mapStateToProps)(Map);
