import React from 'react';

import {selectedPetIndexStream} from '../../streams/selected_pet_index_stream'
import {nextStream, previousStream} from '../../sources/intents'

export default class PetSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentValue: 1};
    }

    componentDidMount() {
        this.subscription = selectedPetIndexStream.subscribe(currentValue => this.setState({currentValue}));
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }

    render() {
        return (
            <div>
                <button onClick={() => nextStream.next()}>Next</button>
                <button onClick={() => previousStream.next()}>Previous</button>
                <p>{this.state.currentValue}</p>
            </div>
        )
    }
}