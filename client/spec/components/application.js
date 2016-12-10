import React from 'react';
import {mount} from 'enzyme';

export const renderApplication = (applicationComponent) => {
    const wrapper = mount(applicationComponent);

    return {
        selectedPetIsShown: () => wrapper.findWhere(element => element.text() === 'Selected Pet').length != 0
    }
};