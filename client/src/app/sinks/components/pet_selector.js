import React from 'react';

export default class PetSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentValue: 1};
    }

    componentDidMount() {
        this.subscription = this.props.selectedPetIndexStream.subscribe(currentValue => this.setState({currentValue}));
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }

    render() {
        return (
            <div>
                <button onClick={() => this.props.nextStream.next()}>Next</button>
                <button onClick={() => this.props.previousStream.next()}>Previous</button>
                <p>{this.state.currentValue}</p>
            </div>
        )
    }
}