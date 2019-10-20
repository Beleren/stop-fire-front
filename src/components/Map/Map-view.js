import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from '../Marker'
import HealthPointsBar from '../HealthPointsBar'

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

    const createMapOptions = function (maps) {
      return {
        panControl: false,
        mapTypeControl: false,
        scrollwheel: false,
        scaleControl: false,
        zoomControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        styles: [
          {
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative.neighborhood",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "transit",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          }
        ]
      }
    }

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCbgyRHLgWnrsRCKSuXrKWwwzJFY_OeF8M' }}
          defaultCenter={{ lat: 0, lng: 0 }}
          defaultZoom={1}
          options={createMapOptions}
        >

          {
            this.state.markers.map(mrk => (
              <Marker key={mrk.id} lat={mrk.lat} lng={mrk.lng} handleClick={() => this.markerClick(mrk.id)}/>
            ))
          }
          
        </GoogleMapReact>
        <HealthPointsBar value={90}/>
      </div>
    );
  }
}

export default Map;