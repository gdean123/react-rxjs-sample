import React from 'react';

export class SelectedPetFactory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            disposition: ''
        }
    }

    componentDidMount() {
        this.subscription = this.props.didReceivePet.subscribe(pet => this.setState(pet));
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