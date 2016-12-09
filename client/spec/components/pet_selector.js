import React from 'react';
import {mount} from 'enzyme';

import {PetSelectorFactory} from '../../src/app/sinks/components/pet_selector';

const renderPetSelector = ({nextStream, previousStream, selectedPetIndexStream}) => {
    const PetSelector = <PetSelectorFactory nextStream={nextStream} previousStream={previousStream} selectedPetIndexStream={selectedPetIndexStream}/>;
    const wrapper = mount(PetSelector);

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