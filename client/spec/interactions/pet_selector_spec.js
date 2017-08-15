import React from 'react';
import Rx from 'rxjs'

import {PetRepository} from '../../src/persistence/pet_repository';
import {renderPetSelector} from '../page_objects/pet_selector';
import {renderSelectedPet} from '../page_objects/selected_pet';
import {didReceivePetStream} from "../../src/domain/sources/network";
import {fetchPetSink} from '../../src/domain/sinks/fetch_pet_sink'

describe('PetSelector', () => {
    let petSelector, selectedPet;

    beforeEach(() => {
        petSelector = renderPetSelector();
        selectedPet = renderSelectedPet();
    });

    describe('clicking next', () => {
        it('adds one to the pet selector label', () => {
            expect(petSelector.label()).toEqual('1');
            petSelector.next();
            expect(petSelector.label()).toEqual('2');
        });

        it('fetches the pet with the associated id', () => {
            spyOn(PetRepository, 'get').and.returnValue(Rx.Observable.never());
            fetchPetSink.start();

            petSelector.next();
            expect(PetRepository.get).toHaveBeenCalledWith(2);

            fetchPetSink.stop();
        });

        it('renders the pet name and disposition when the request succeeds', () => {
            didReceivePetStream.next({name: 'Pillowfight', disposition: 'Sleepy'});

            expect(selectedPet.nameLabel()).toEqual('Name: Pillowfight');
            expect(selectedPet.dispositionLabel()).toEqual('Disposition: Sleepy');
        })
    });

    describe('clicking previous', () => {
        it('subtracts one from the pet selector label', () => {
            expect(petSelector.label()).toEqual('1');
            petSelector.next();
            expect(petSelector.label()).toEqual('2');

            petSelector.previous();
            expect(petSelector.label()).toEqual('1');
        });
    });
});