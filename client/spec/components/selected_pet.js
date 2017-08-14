import React from 'react';
import {mount} from 'enzyme';

export const renderSelectedPet = (selectedPet) => {
    const wrapper = mount(selectedPet);

    const nameLabel = () => wrapper.find('p').at(0);
    const dispositionLabel = () => wrapper.find('p').at(1);

    return {
        nameLabel: () =>  nameLabel().text(),
        dispositionLabel: () => dispositionLabel().text()
    }
};