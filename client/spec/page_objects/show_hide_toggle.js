import React from 'react';
import {mount} from 'enzyme';
import ShowHideToggle from '../../src/presentation/show_hide_toggle'

export const renderShowHideToggle = () => {
    const wrapper = mount(<ShowHideToggle/>);

    const toggleButton = () => wrapper.find('button');

    return {
        buttonLabel: () => toggleButton().text(),
        toggleVisibility: () => toggleButton().simulate('click')
    }
};