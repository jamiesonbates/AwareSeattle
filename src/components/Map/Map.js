import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GoogleMapLoader, GoogleMap, Marker, Circle } from 'react-google-maps';


class Map extends Component {
  render() {
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
              zoom={13}
              center={{ lat: 47.6062, lng: -122.3321 }}
              >
                {this.props.mergedReports.map((report, i) => {
                  const position = {
                    lat: parseFloat(report.latitude),
                    lng: parseFloat(report.longitude)
                  }
                  return (
                    <Marker
                      key={i}
                      position={position}
                      info={report}
                    />
                  );
                })}

                <Circle
                  center={{ lat: 47.6062, lng: -122.3321 }}
                  radius={500}
                />
              </GoogleMap>
            }
          />
        </div>
      );

  }
}

const mapStateToProps = function(store) {
  return {
    locations: store.locations.locations,
    reports: store.policeReports.reports,
    mergedReports: store.policeReports.mergedReports
  }
}

export default connect(mapStateToProps)(Map);
