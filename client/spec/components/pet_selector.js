import React from 'react';
import {mount} from 'enzyme';

import {PetSelector} from '../../src/app/sinks/components/pet_selector';

const renderPetSelector = ({nextStream, previousStream, selectedPetIndexStream}) => {
    const petSelector = React.createElement(PetSelector, {nextStream, previousStream, selectedPetIndexStream});
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

export default renderPetSelector;