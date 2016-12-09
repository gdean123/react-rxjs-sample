import React from 'react';

export const App = ({petSelector, selectedPet}) => {
    return (
        <div>
            {petSelector}
            {selectedPet}
        </div>
    )
};