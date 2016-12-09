import React from 'react';
import Rx from 'rxjs'

import renderPetSelector from '../components/pet_selector';
import {PetRepository} from '../../src/app/repositories/pet_repository';
import {createApplication} from '../../src/app/factories/application'

describe('clicking next', () => {
    let application, petSelector;

    beforeEach(() => {
        application = createApplication();
        petSelector = renderPetSelector(application.components.petSelector);
    });

    it('adds one to the pet selector label', () => {
        expect(petSelector.label()).toEqual('1');
        petSelector.next();
        expect(petSelector.label()).toEqual('2');
    });

    it('fetches the name of the pet with the associated id', () => {
        application.sinks.fetchPet.start();

        spyOn(PetRepository, 'get').and.returnValue(Rx.Observable.never());
        petSelector.next();
        expect(PetRepository.get).toHaveBeenCalledWith(2);

        application.sinks.fetchPet.stop();
    })
});