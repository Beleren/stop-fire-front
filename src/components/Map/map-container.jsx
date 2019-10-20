import React, { useState } from "react";
import useInterval from "./hooks";
import MapView from "./Map-view";
import incendios from "../../services/incendios";

const MapContainer = () => {
  const [state, setState] = useState({
    markers_base: incendios,
    markers: [],
    putOut: [],
    missed: [],
    hp: 100,
  });
  const customClearInterval = () => {
    for (let i = 0; i < 99999; i++) {
     clearInterval(i) ;
    }
  }

  const gameOver = () => {
    alert("Você perdeu!");
  };

  const youWin = () => {
    alert("You win!");
  };

  const firePutOut = id => {
    const { markers, putOut } = state;
    let i = markers.findIndex(m => m.id === id);
    let aux = markers.splice(i, 1);
    setState({ ...state, markers });
    if (aux.length > 0) {
      putOut.push(aux[0]);
      setState({ ...state, putOut});
    }
  };

  const fireExpired = id => {
    let { markers, markers_base, missed, hp } = state;
    let i = markers.findIndex(m => m.id === id);
    let aux = markers.splice(i, 1);
    if (aux.length > 0) {
      missed.push(aux[0]);
      hp = hp - 5;
      setState({ ...state, markers, missed, hp });
    }
    if (hp <= 0) {
      customClearInterval();
      setState({ ...state, customClearInterval: () => {}});
      gameOver();
    } else if (markers.length <= 0 && markers_base.length <= 0) {
      customClearInterval();
      setState({ ...state, customClearInterval: () => {} });
      youWin();
    }
  };

  const fetchFire = () => {
    const { markers, markers_base } = state;
    if (markers_base.length === 0) {
      return;
    }
    let e = markers_base.shift();
    markers.push(e);
    setState({ ...state, markers, markers_base });
  };
  useInterval(fetchFire, 1000);

  const { markers, hp } = state;
  return (
    <MapView
      markers={markers}
      hp={hp}
      firePutOut={firePutOut}
      fireExpired={fireExpired}
    />
  );
};

export default MapContainer;
