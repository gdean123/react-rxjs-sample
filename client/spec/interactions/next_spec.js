import React from 'react';
import Rx from 'rxjs'

import {PetRepository} from '../../src/app/repositories/pet_repository';
import {renderPetSelector} from '../components/pet_selector';
import {renderSelectedPet} from '../components/selected_pet';
import {didReceivePetStream} from "../../src/app/sources/network";
import SelectedPet from '../../src/app/sinks/components/selected_pet'
import {fetchPetSink} from '../../src/app/sinks/network/fetch_pet_sink'

describe('clicking next', () => {
    let petSelector, selectedPet;

    beforeEach(() => {
        petSelector = renderPetSelector();
        selectedPet = renderSelectedPet(<SelectedPet/>);
    });

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