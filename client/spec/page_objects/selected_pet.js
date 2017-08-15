import React from 'react';
import {mount} from 'enzyme';
import SelectedPet from '../../src/presentation/selected_pet'

export const renderSelectedPet = () => {
    const wrapper = mount(<SelectedPet/>);

    const nameLabel = () => wrapper.find('p').at(0);
    const dispositionLabel = () => wrapper.find('p').at(1);

    return {
        nameLabel: () =>  nameLabel().text(),
        dispositionLabel: () => dispositionLabel().text()
    }
};