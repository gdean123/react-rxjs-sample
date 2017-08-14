import React from 'react';

export const PetSelector = ({next, previous, selectedPetIndex}) => (
    <div>
        <button onClick={() => next()}>Next</button>
        <button onClick={() => previous()}>Previous</button>
        <p>{selectedPetIndex}</p>
    </div>
);