import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';


function Map(props) {
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
            defaultZoom={12}
            center={{ lat: 47.6062, lng: -122.3321 }}
          >

          </GoogleMap>
        }
      />
    </div>
  );
}

export default Map;
