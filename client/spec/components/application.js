import React from 'react';
import {mount} from 'enzyme';
import SelectedPet from "../../src/app/sinks/components/selected_pet";
import Application from '../../src/app/sinks/components/application';

export const renderApplication = () => {
    const wrapper = mount(<Application/>);
    const selectedPet = () => wrapper.find(SelectedPet);

    return {
        selectedPetIsShown: () => selectedPet().length !== 0
    }
};