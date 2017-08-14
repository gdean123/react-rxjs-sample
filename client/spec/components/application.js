import React from 'react';
import {mount} from 'enzyme';
import {SelectedPet} from "../../src/app/sinks/components/selected_pet";

export const renderApplication = (applicationComponent) => {
    const wrapper = mount(applicationComponent);
    const selectedPet = () => wrapper.find(SelectedPet);

    return {
        selectedPetIsShown: () => selectedPet().length !== 0
    }
};