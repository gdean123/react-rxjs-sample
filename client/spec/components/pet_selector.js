import React from 'react';
import {mount} from 'enzyme';

export const renderPetSelector = (petSelector) => {
    const wrapper = mount(petSelector);

    const nextButton = wrapper.findWhere(element => element.text() === 'Next');
    const previousButton = wrapper.findWhere(element => element.text() === 'Previous');
    const label = wrapper.find('p');

    return {
        next: () => nextButton.simulate('click'),
        previous: () => previousButton.simulate('click'),
        label: () => label.text()
    }
};