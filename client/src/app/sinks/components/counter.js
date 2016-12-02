import React from 'react';

import {totalStream} from '../../streams/total_stream'
import {incrementStream, decrementStream} from '../../sources/intents'

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {total: 1};
    }

    componentDidMount() {
        this.subscription = totalStream.subscribe(total => this.setState({total}));
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }

    render() {
        return (
            <div>
                <button onClick={() => incrementStream.next()}>Increment</button>
                <button onClick={() => decrementStream.next()}>Decrement</button>
                <p>{this.state.total}</p>
            </div>
        )
    }
}