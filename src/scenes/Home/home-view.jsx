import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./home.css";

const Home = () => {
  return (
    <div className='home'>
      <section className="home-container container">
        <h1 style={{ marginBottom: "2em" }}>STOP FIRE</h1>
        <h4 style={{color:'white'}}>
          BY PLAYING THIS GAME YOU CAN HELP TO SAVE FORESTS<br></br>
          PLAY UNTIL THE END TO HELP THE WORLD
        </h4>
        <div>
          <Link to='/pregame'>
            <Button variant="contained" color="primary">Continue</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
