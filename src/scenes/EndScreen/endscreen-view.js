import React from 'react';
import { Link } from 'react-router-dom';
import MenuContainer from "../../components/MenuContainer";
import Button from '@material-ui/core/Button';
import './endscreen.css';

const EndScreen = () => {
    return (
        <div className="endscreen">
            <section className="endscreen-container container">
                <h1>Thanks for playing!</h1>
                <Link to="/game">
                    <Button variant="contained" color="primary">Play Again</Button>
                </Link>
            </section>
        </div>
    )
}

export default EndScreen;