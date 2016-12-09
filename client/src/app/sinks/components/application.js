import React from 'react';

export const Application = ({petSelector, selectedPet}) => {
    return (
        <div>
            {petSelector}
            {selectedPet}
        </div>
    )
};