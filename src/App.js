import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./scenes/Home";
import Cadastro from './scenes/Cadastro';
import EndScreen from './scenes/EndScreen';
import Map from "./components/Map";
import PreGame from "./scenes/PreGame";
import Disclaimer from "./scenes/Disclaimer";

function App() {
  return (
    <main style={{ position: "relative" }}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/disclaimer'>
            <Disclaimer />
          </Route>
          <Route path='/game'>
            <Map />
          </Route>
          <Route path='/pregame'>
            <PreGame />
          </Route>
          <Route path='/form'>
            <Cadastro />
          </Route>
          <Route path='/thankyou'>
            <EndScreen />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
