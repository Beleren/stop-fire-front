import React from 'react';



export default (props) => {
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
        backgroundColor: 'black'
    }

    const innerStyles = {
        backgroundColor: props.value <= 30 ? 'red' : props.value <= 70 ? 'orange' : 'green',
        width: `${props.value}%`,
        height: '1em'
    }

    const textStyles = {
        position: 'absolute',
        left: '-50%',
        top: '-50%',
        transform: 'translateX(-50%) translateY(50%)',
        zIndex: '5'
    }

    return (
        <div style={styles}>
            <div style={innerStyles}></div>
            {/* <div style={textStyles}>{props.value}</div> */}
        </div>
    );
}