import React from 'react';
import {mount} from 'enzyme';
import SelectedPet from "../../src/presentation/selected_pet";
import Application from '../../src/presentation/application';

export const renderApplication = () => {
    const wrapper = mount(<Application/>);
    const selectedPet = () => wrapper.find(SelectedPet);

    return {
        selectedPetIsShown: () => selectedPet().length !== 0
    }
};