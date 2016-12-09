import React from 'react';

import {PetSelector} from '../sinks/components/pet_selector'
import {SelectedPet} from '../sinks/components/selected_pet'
import {Application} from '../sinks/components/application';

export const createComponents = (sources, streams) => {
    const petSelector = React.createElement(PetSelector, {nextStream: sources.next, previousStream: sources.previous, selectedPetIndexStream: streams.selectedPetIndex});
    const selectedPet = React.createElement(SelectedPet, {didReceivePetStream: sources.didReceivePet});
    const application = React.createElement(Application, {petSelector, selectedPet});

    return {petSelector, selectedPet, application}
};