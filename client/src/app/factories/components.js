import React from 'react';

import {PetSelector} from '../sinks/components/pet_selector'
import {SelectedPet} from '../sinks/components/selected_pet'
import {ShowHideToggle} from '../sinks/components/show_hide_toggle'
import {Application} from '../sinks/components/application';

export const createComponents = (sources, streams) => {
    const petSelector = React.createElement(PetSelector, {nextStream: sources.next, previousStream: sources.previous, selectedPetIndexStream: streams.selectedPetIndex});
    const selectedPet = React.createElement(SelectedPet, {didReceivePetStream: sources.didReceivePet});
    const showHideToggle = React.createElement(ShowHideToggle, {toggleVisibilityStream: sources.toggleVisibility, visibilityToggleLabelStream: streams.visibilityToggleLabel});
    const application = React.createElement(Application, {petSelector: petSelector, showHideToggle: showHideToggle, selectedPet: selectedPet, selectedPetVisibilityStream: streams.selectedPetVisibility});

    return {petSelector, selectedPet, showHideToggle, application}
};