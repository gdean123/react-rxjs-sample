import React from 'react';

import {didReceivePet} from '../../sources/network';

export default class SelectedPet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            disposition: ''
        }
    }

    componentDidMount() {
        this.subscription = didReceivePet.subscribe(pet => this.setState(pet));
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }

    render() {
        return (
            <div>
                <p>Name: {this.state.name}</p>
                <p>Disposition: {this.state.disposition}</p>
            </div>
        )
    }
}