import React from 'react';
import {mount} from 'enzyme';

export const renderShowHideToggle = (showHideToggle) => {
    const wrapper = mount(showHideToggle);

    const toggleButton = wrapper.find('button');

    return {
        buttonLabel: () => toggleButton.text(),
        toggleVisibility: () => toggleButton.simulate('click')
    }
};