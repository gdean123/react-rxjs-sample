import React from 'react';

export const Application = ({petSelector, showHideToggle, selectedPet, selectedPetIsVisible}) => (
    <div>
        {petSelector}
        {showHideToggle}
        {selectedPetIsVisible && selectedPet}
    </div>
);