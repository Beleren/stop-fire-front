import React from 'react';

const styles = {
    width: '30px',
    height: '30px',
    cursor: 'pointer'
}

export default class Marker extends React.Component {
    componentDidMount() {
        setTimeout(() => this.props.fireExpired(this.props.id), this.props.timeout);
    }

    render () {
        return <img onClick={() => this.props.firePutOut(this.props.id)} src="/fire.svg" style={styles}></img>
    }
}