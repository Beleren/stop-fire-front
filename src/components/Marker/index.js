import React from 'react';

const styles = {
    width: '45px',
    height: '45px',
    cursor: 'pointer'
}

export default class Marker extends React.Component {
    componentDidMount() {
        setTimeout(() => this.props.fireExpired(this.props.id), this.props.timeout);
    }

    render () {
        if(this.props.legal) {
            return <img onClick={() => this.props.legalPutOut(this.props.id)} src="/legal.svg" style={styles}></img>
        }
        return <img onClick={() => this.props.firePutOut(this.props.id)} src="/fire.svg" style={styles}></img>
    }
}