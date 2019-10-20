import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from '../Marker'
import HealthPointsBar from '../HealthPointsBar'
import incendios from '../../services/incendios'

class Map extends Component {

  interval = null;

  gameOver = () => {
    alert('Você perdeu!');
  }

  youWin = () => {
    alert('You win!');
  }

  firePutOut = id => {
    let s = { ...this.state };
    let i = s.markers.findIndex(m => m.id === id);
    let aux = s.markers.splice(i, 1);
    if (aux.length > 0) {
      s.putOut.push(aux[0]);
    }
    this.setState(s);
  }

  fireExpired = id => {
    if (!this.interval) return;
    let s = { ...this.state };
    let i = s.markers.findIndex(m => m.id === id);
    let aux = s.markers.splice(i, 1);
    if (aux.length > 0) {
      s.missed.push(aux[0]);
      s.hp -= 5;
    }
    if (s.hp <= 0) {
      clearInterval(this.interval);
      this.interval = null;
      this.gameOver();
    } else if (s.markers.length <= 0) {
      clearInterval(this.interval);
      this.interval = null;
      this.youWin();
    }
    this.setState(s);
  }

  fetchFire = () => {
    let s = { ...this.state };
    if (s.markers_base.length === 0) {
      return;
    }
    let e = s.markers_base.shift();
    s.markers.push(e);
    this.setState(s);
  }

  state = {
    markers_base: incendios,
    markers: [],
    putOut: [],
    missed: [],
    hp: 100
  }

  componentDidMount() {
    this.interval = setInterval(this.fetchFire, 1000);
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
      <div style={{ height: '100vh', width: '100%', cursor: "url('/hose32.png')" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCbgyRHLgWnrsRCKSuXrKWwwzJFY_OeF8M' }}
          defaultCenter={{ lat: 0, lng: 0 }}
          defaultZoom={1}
          options={createMapOptions}
        >
          {
            this.state.markers.map(mrk => (
              <Marker key={mrk.id} id={mrk.id} lat={mrk.lat} lng={mrk.lng} firePutOut={this.firePutOut} fireExpired={this.fireExpired} timeout={5000} />
            ))
          }

        </GoogleMapReact>
        <HealthPointsBar value={this.state.hp} />
      </div>
    );
  }
}

export default Map;