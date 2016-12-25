import React from 'react';

const InternalPetSelector = ({nextStream, previousStream, selectedPetIndex}) => (
    <div>
        <button onClick={() => nextStream.next()}>Next</button>
        <button onClick={() => previousStream.next()}>Previous</button>
        <p>{selectedPetIndex}</p>
    </div>
);

export class PetSelector extends React.Component {
    componentDidMount() {
        this.subscription = this.props.stateStream.subscribe(state => this.setState(state));
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }

    render() {
        return (
            <InternalPetSelector {...this.props} {...this.state} />
        )
    }
}