import React from 'react';

import {PetSelector} from '../sinks/components/pet_selector'
import {SelectedPet} from '../sinks/components/selected_pet'
import {ShowHideToggle} from '../sinks/components/show_hide_toggle'
import {Application} from '../sinks/components/application';
import {connect} from '../support/connect';

export const createComponents = (sources, streams) => {
    const StatefulPetSelector = connect(PetSelector, streams.petSelectorState);
    const StatefulApplication = connect(Application, streams.applicationState);

    const petSelector = React.createElement(StatefulPetSelector, {nextStream: sources.next, previousStream: sources.previous});
    const selectedPet = React.createElement(SelectedPet, {didReceivePetStream: sources.didReceivePet});
    const showHideToggle = React.createElement(ShowHideToggle, {toggleVisibilityStream: sources.toggleVisibility, visibilityToggleLabelStream: streams.visibilityToggleLabel});
    const application = React.createElement(StatefulApplication, {petSelector: petSelector, showHideToggle: showHideToggle, selectedPet: selectedPet});

    return {petSelector, selectedPet, showHideToggle, application}
};