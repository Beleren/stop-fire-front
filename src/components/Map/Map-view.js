import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from '../Marker'

class Map extends Component {

  markerClick = id => {
    let s = {...this.state};
    s.markers = s.markers.filter(m => m.id !== id);
    this.setState(s);
  }

  state = {
    markers: [
      { id: 1, lng: 33.70215, lat: 35.46019 },
      { id: 2, lng: -118.510869853, lat: 34.324001137  },
      { id: 3, lng: -119.938271098, lat: 37.609361936 }
    ]
  }

  render() {
    const {markerClick} = this.props;

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCbgyRHLgWnrsRCKSuXrKWwwzJFY_OeF8M' }}
          defaultCenter={{ lat: 0, lng: 0 }}
          defaultZoom={1}
        >

          {
            this.state.markers.map(mrk => (
              <Marker key={mrk.id} lat={mrk.lat} lng={mrk.lng} handleClick={() => this.markerClick(mrk.id)}/>
            ))
          }
          
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;