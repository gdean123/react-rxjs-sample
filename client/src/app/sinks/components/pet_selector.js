import React from 'react';
import {connect} from '../../support/connect';

const StatelessPetSelector = ({nextStream, previousStream, selectedPetIndex}) => (
    <div>
        <button onClick={() => nextStream.next()}>Next</button>
        <button onClick={() => previousStream.next()}>Previous</button>
        <p>{selectedPetIndex}</p>
    </div>
);

export const PetSelector = connect(StatelessPetSelector);