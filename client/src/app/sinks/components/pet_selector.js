import React from 'react';
import {nextStream, previousStream} from "../../sources/intents";
import {selectedPetIndexStream} from '../../streams/selected_pet_index_stream';
import {connect} from '../../support/connect';

const PetSelector = ({next, previous, selectedPetIndex}) => (
    <div>
        <button onClick={() => next()}>Next</button>
        <button onClick={() => previous()}>Previous</button>
        <p>{selectedPetIndex}</p>
    </div>
);

export default connect(PetSelector, {
    selectedPetIndex: selectedPetIndexStream
}, {
    next: nextStream,
    previous: previousStream
});
