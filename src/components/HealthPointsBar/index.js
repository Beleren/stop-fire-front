import React from 'react';



export default (props) => {
    const bgcolor = props.value <= 30 ? 'red' : props.value <= 70 ? 'orange' : 'green';
    const styles = {
        boxSizing: 'border-box',
        fontSize: '1.5em',
        border: '2px solid white',
        color: 'white',
        textAlign: 'center',
        left: '5px',
        width: 'calc(100% - 10px)',
        position: 'absolute',
        bottom: '5px',
        backgroundImage: `linear-gradient(to right, ${bgcolor} 0%, ${bgcolor} ${props.value}%, black ${props.value}%, black 100%)`
    }

    return (
        <div style={styles}>{props.value}</div>
    );
}