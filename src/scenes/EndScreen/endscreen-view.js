import React from 'react';
import { Link } from 'react-router-dom';
import MenuContainer from "../../components/MenuContainer";
import Button from '@material-ui/core/Button';

const EndScreen = () => {
    return (
        <MenuContainer>
            <section>
                <h1>Thanks for playing</h1>
                <Link to="/game">
                    <Button variant="contained" color="primary">Play Again</Button>
                </Link>
            </section>
        </MenuContainer>
    )
}

export default EndScreen;