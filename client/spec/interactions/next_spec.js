import React from 'react';
import Rx from 'rxjs'

import {createApplication} from '../../src/app/factories/application'
import {PetRepository} from '../../src/app/repositories/pet_repository';
import {renderPetSelector} from '../components/pet_selector';
import {renderSelectedPet} from '../components/selected_pet';

describe('clicking next', () => {
    let application, petSelector, selectedPet;

    beforeEach(() => {
        application = createApplication();
        petSelector = renderPetSelector(application.components.petSelector);
        selectedPet = renderSelectedPet(application.components.selectedPet);
    });

    it('adds one to the pet selector label', () => {
        expect(petSelector.label()).toEqual('1');
        petSelector.next();
        expect(petSelector.label()).toEqual('2');
    });

    it('fetches the pet with the associated id', () => {
        application.sinks.fetchPet.start();

        spyOn(PetRepository, 'get').and.returnValue(Rx.Observable.never());
        petSelector.next();
        expect(PetRepository.get).toHaveBeenCalledWith(2);

        application.sinks.fetchPet.stop();
    });

    it('renders the pet name and disposition when the request succeeds', () => {
        application.sources.didReceivePet.next({name: 'Pillowfight', disposition: 'Sleepy'});

        expect(selectedPet.nameLabel()).toEqual('Name: Pillowfight');
        expect(selectedPet.dispositionLabel()).toEqual('Disposition: Sleepy');
    })
});