import React from 'react';

import renderPetSelector from '../components/pet_selector';
import PetSelector from '../../src/app/sinks/components/pet_selector';

describe("clicking previous", () => {
    let petSelector;

    beforeEach(() => {
        petSelector = renderPetSelector(<PetSelector/>);
    });

    it("subtracts one from the pet selector label", () => {
        expect(petSelector.label()).toEqual('1');
        petSelector.next();
        expect(petSelector.label()).toEqual('2');

        petSelector.previous();
        expect(petSelector.label()).toEqual('1');
    });
});