import React from 'react';
import {mount} from 'enzyme';

export const renderPetSelector = (petSelector) => {
    const wrapper = mount(petSelector);

    function elementWithText(text) {
        return wrapper.findWhere(element => element.text() === text);
    }

    const nextButton = () => elementWithText('Next');
    const previousButton = () => elementWithText('Previous');
    const label = () => wrapper.find('p');

    return {
        next: () => nextButton().simulate('click'),
        previous: () => previousButton().simulate('click'),
        label: () => label().text()
    }
};