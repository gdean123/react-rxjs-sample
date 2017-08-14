import React from 'react';

export const SelectedPet = ({pet}) => (
    <div>
        <h1>Selected Pet</h1>
        <p>Name: {pet.name}</p>
        <p>Disposition: {pet.disposition}</p>
    </div>
);