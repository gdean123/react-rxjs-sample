import React from 'react';

import pokemonName from '../streams/pokemon_name';

export default class Label extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: ''}
    }

    componentDidMount() {
        this.subscription = pokemonName.subscribe(
            name => {
                this.setState({name})
            },
            err => console.error(err)
        );
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