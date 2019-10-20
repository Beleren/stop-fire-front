import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./home.css";

const Home = () => {
  return (
    <div className='home'>
      <section className="home-container container">
        <h1 style={{ marginBottom: "2em" }}>STOP FIRE</h1>
        <div>
          <Link to='/disclaimer' className='btn'>START</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
