import React, { useState } from "react";
import useInterval from "./hooks";
import MapView from "./Map-view";
import incendios from "../../services/incendios";
import { Link } from 'react-router-dom';
import dificuldades from '../../services/dificuldades';

const MapContainer = () => {
  const [state, setState] = useState({
    markers_base: incendios,
    markers: [],
    putOut: [],
    missed: [],
    hp: 100,
    level: 'easy',
    playsOpen: 0,
    playsClosed: 0
  });
  const customClearInterval = () => {
    for (let i = 0; i < 99999; i++) {
     clearInterval(i) ;
    }
  }

  const gameOver = () => {
    alert("Você perdeu!");
    window.location.href="/form"
  };

  const youWin = () => {
    alert("You win!");
    window.location.href="/form"
  };

  const checkNewLevel = () => {
    let {playsOpen, playsClosed, level} = state;
    if (playsOpen === playsClosed && playsOpen === dificuldades[level].plays) {
      playsOpen = 0;
      playsClosed = 0;
      level = dificuldades[level].next;
    }
  }

  const firePutOut = id => {
    //console.log('fireputout', state);
    const { markers, putOut } = state;
    let i = markers.findIndex(m => m.id === id);
    if (i<0) {
      return;
    }
    let aux = markers.splice(i, 1);
    if (aux.length > 0) {
      putOut.push(aux[0]);
      setState({ ...state, putOut});
    }
  };

  const fireExpired = id => {
    let { markers, markers_base, missed, hp, playsClosed } = state;
    playsClosed++;
    setState({ ...state, playsClosed });
    let i = markers.findIndex(m => m.id === id);
    if (i >= 0) {
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
        return;
      } else if (markers.length <= 0 && markers_base.length <= 0) {
        customClearInterval();
        setState({ ...state, customClearInterval: () => {} });
        youWin();
        return;
      }
    }    
    checkNewLevel();
  };

  const legalPutOut = id => {
    let { markers, missed, hp } = state;
    let i = markers.findIndex(m => m.id === id);
    if (i<0) {
      return;
    }
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
    }
  }

  const fetchFire = () => {
    const { markers, markers_base, playsOpen, level } = state;
    if (markers_base.length <= 0) {
      return;
    }
    console.log(level);
    if (playsOpen === dificuldades[level].plays) {
      return;
    }
    let e = markers_base.splice(Math.floor(Math.random()*markers_base.length), 1);
    e = e[0];
    // let e = markers_base.shift();
    markers.push(e);    
    setState({ ...state, playsOpen: playsOpen+1, markers, markers_base });
  };
  useInterval(fetchFire, 1000);

  const { markers, hp, level } = state;
  return (
    <MapView
      markers={markers}
      hp={hp}
      firePutOut={firePutOut}
      legalPutOut={legalPutOut}
      fireExpired={fireExpired}
    />
  );
};

export default MapContainer;
