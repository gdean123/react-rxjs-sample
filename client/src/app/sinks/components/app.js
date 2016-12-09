import React from 'react';

export const AppFactory = ({PetSelector, SelectedPet}) => {
    return (
        <div>
            {PetSelector}
            {SelectedPet}
        </div>
    )
};