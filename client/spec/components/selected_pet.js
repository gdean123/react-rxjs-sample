import React from 'react';
import {mount} from 'enzyme';

export const renderSelectedPet = (selectedPet) => {
    const wrapper = mount(selectedPet);

    const name = wrapper.find('p').at(0);
    const disposition = wrapper.find('p').at(1);

    return {
        nameLabel: () => name.text(),
        dispositionLabel: () => disposition.text()
    }
};