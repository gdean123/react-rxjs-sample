import React from 'react';

export class SelectedPet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            disposition: ''
        }
    }

    componentDidMount() {
        this.subscription = this.props.didReceivePetStream.subscribe(pet => this.setState(pet));
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }

    render() {
        return (
            <div>
                <h1>Selected Pet</h1>
                <p>Name: {this.state.name}</p>
                <p>Disposition: {this.state.disposition}</p>
            </div>
        )
    }
}