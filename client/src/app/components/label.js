import React from 'react';

import {totalStream} from '../streams/total_stream'

export default class Label extends React.Component {
    constructor(props) {
        super(props);
        this.state = {total: 0}
    }

    componentDidMount() {
        this.subscription = totalStream.subscribe(total => this.setState({total}));
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }

    render() {
        return (
            <p>Total: {this.state.total}</p>
        )
    }
}