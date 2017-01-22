import React from 'react';

export class SelectedPet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pet: {
                name: '',
                disposition: ''
            }
        }
    }

    componentDidMount() {
        this.subscription = this.props.stateStream.subscribe(state => this.setState(state));
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }

    render() {
        return (
            <div>
                <h1>Selected Pet</h1>
                <p>Name: {this.state.pet.name}</p>
                <p>Disposition: {this.state.pet.disposition}</p>
            </div>
        )
    }
}