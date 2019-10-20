import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "../Marker";
import HealthPointsBar from "../HealthPointsBar";

const MapView = props => {
  const { markers, hp, firePutOut, legalPutOut, fireExpired } = props;
  const createMapOptions = function(maps) {
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
          elementType: "labels",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "administrative",
          elementType: "geometry",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "administrative.land_parcel",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "administrative.neighborhood",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "poi",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "road",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "transit",
          stylers: [
            {
              visibility: "off"
            }
          ]
        }
      ]
    };
  };
  return (
    // Important! Always set the container height explicitly
    <div
      style={{ height: "100vh", width: "100%", cursor: "url('/hose32.png')" }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCbgyRHLgWnrsRCKSuXrKWwwzJFY_OeF8M" }}
        defaultCenter={{ lat: 0, lng: 0 }}
        defaultZoom={1}
        options={createMapOptions}
      >
        {markers.map(mrk => (
          <Marker
            key={mrk.id}
            id={mrk.id}
            lat={mrk.lat}
            lng={mrk.lng}
            legal={mrk.legal}
            firePutOut={firePutOut}
            legalPutOut={legalPutOut}
            fireExpired={fireExpired}
            timeout={5000}
          />
        ))}
      </GoogleMapReact>
      <HealthPointsBar value={hp} />
    </div>
  );
};

export default MapView;
