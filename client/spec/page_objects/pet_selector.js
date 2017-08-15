import React from 'react';
import {mount} from 'enzyme';
import PetSelector from "../../src/presentation/pet_selector";

export const renderPetSelector = () => {
    const wrapper = mount(<PetSelector/>);

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