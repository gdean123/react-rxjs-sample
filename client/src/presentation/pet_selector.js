import React from 'react';
import {nextStream, previousStream} from "../domain/sources/intents";
import {selectedPetIndexStream} from '../domain/streams/selected_pet_index_stream';
import {connect} from './connect';

const PetSelector = ({didClickNext, didClickPrevious, selectedPetIndex}) => (
    <div>
        <button onClick={didClickNext}>Next</button>
        <button onClick={didClickPrevious}>Previous</button>
        <p>{selectedPetIndex}</p>
    </div>
);

export default connect(PetSelector, {
    selectedPetIndex: selectedPetIndexStream
}, {
    didClickNext: nextStream,
    didClickPrevious: previousStream
});
