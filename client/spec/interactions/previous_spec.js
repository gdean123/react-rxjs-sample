import React from "react";
import renderPetSelector from "../components/pet_selector";
import {createApplication} from '../../src/app/factories/application'

describe('clicking previous', () => {
    let application, petSelector;

    beforeEach(() => {
        application = createApplication();
        petSelector = renderPetSelector(application.components.petSelector);
    });

    it('subtracts one from the pet selector label', () => {
        expect(petSelector.label()).toEqual('1');
        petSelector.next();
        expect(petSelector.label()).toEqual('2');

        petSelector.previous();
        expect(petSelector.label()).toEqual('1');
    });
});