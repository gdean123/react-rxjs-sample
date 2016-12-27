import React from 'react';

export const PetSelector = ({nextStream, previousStream, selectedPetIndex}) => (
    <div>
        <button onClick={() => nextStream.next()}>Next</button>
        <button onClick={() => previousStream.next()}>Previous</button>
        <p>{selectedPetIndex}</p>
    </div>
);