import React from 'react';
import { GoogleMapLoader, GoogleMap, Marker, Circle } from 'react-google-maps';


function Map(props) {
  console.log('props', props);
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapLoader
        containerElement={
          <div
            {...props.containerElementProps}
            style={{ height: '100%' }}
          />
        }
        googleMapElement={
          <GoogleMap
            defaultZoom={13}
            center={{ lat: 47.6062, lng: -122.3321 }}
          >
            {props.mergedReports.map((report, i) => {
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
              radius={200}
            />
          </GoogleMap>
        }
      />
    </div>
  );
}

export default Map;
