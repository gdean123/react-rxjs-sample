import React from 'react';

import {PetSelector} from '../sinks/components/pet_selector'
import {SelectedPet} from '../sinks/components/selected_pet'
import {ShowHideToggle} from '../sinks/components/show_hide_toggle'
import {Application} from '../sinks/components/application';
import {connect} from '../support/connect';

export const createComponents = (sources, streams) => {
    const StatefulPetSelector = connect(PetSelector, {
        selectedPetIndex: streams.selectedPetIndex
    }, {
        next: sources.next,
        previous: sources.previous
    });

    const StatefulSelectedPet = connect(SelectedPet, {
        pet: sources.didReceivePet
    });

    const petSelector = <StatefulPetSelector/>;
    const selectedPet = <StatefulSelectedPet/>;

    const StatefulShowHideToggle = connect(ShowHideToggle, {
        label: streams.visibilityToggleLabel
    }, {
        toggleVisibility: sources.toggleVisibility
    });

    const showHideToggle = <StatefulShowHideToggle/>;

    const StatefulApplication = connect(Application, {
        selectedPetIsVisible: streams.selectedPetVisibility
    });

    const application = React.createElement(StatefulApplication, {petSelector: petSelector, showHideToggle: showHideToggle, selectedPet: selectedPet});

    return {petSelector, selectedPet, showHideToggle, application}
};