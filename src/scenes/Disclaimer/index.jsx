import React from "react";
import { Link } from "react-router-dom";
import "./disclaimer.css";

const Disclaimer = () => {
  return (
    <div className='disclaimer'>
      <section className='disclaimer-container container'>
        <h2>THIS GAME HELPS SAVING FORESTS</h2>
        <h3>PLAY UNTIL THE END TO HELP THE WORLD</h3>
        <Link className='btn' to='/game'>START GAME</Link>
      </section>
    </div>
  );
};

export default Disclaimer;
