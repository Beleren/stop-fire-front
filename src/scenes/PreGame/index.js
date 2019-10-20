import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import './pregame.css';

const PreGame = () => {
    return (
    <div className="pregame">
        <section className="pregame-container container">
            <h1>Game rules</h1>
            <figure>
                <img src="/fire.svg"></img>
                <figcaption>
                    Click on wildfires to put them out
                </figcaption>
            </figure>
            <figure>
                <img src="/legal.svg"></img>
                <figcaption>
                    You must not click on legal fires
                </figcaption>
            </figure>
            <Link to='/game'>
                <Button variant="contained" color="primary">Start game</Button>
            </Link>
        </section>
    </div>
    )
}

export default PreGame;