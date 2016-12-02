import React from 'react';

import {didReceivePokemonName} from '../../sources/network';

export default class Label extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: ''}
    }

    componentDidMount() {
        this.subscription = didReceivePokemonName.subscribe(name => this.setState({name}));
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }

    render() {
        return (
            <p>Name: {this.state.name}</p>
        )
    }
}