import React from 'react';
import Rx from 'rxjs'

import renderPetSelector from '../components/pet_selector';
import {FetchPetSink} from '../../src/app/sinks/network/fetch_pet_sink';
import {createSelectedPetIndexStream} from '../../src/app/streams/selected_pet_index_stream';
import {PetRepository} from '../../src/app/repositories/pet_repository';

describe('clicking next', () => {
    let petSelector, fetchPetSinkSubscription;

    beforeEach(() => {
        spyOn(PetRepository, 'get').and.returnValue(Rx.Observable.never());

        const nextStream = new Rx.Subject();
        const previousStream = new Rx.Subject();
        const selectedPetIndexStream = createSelectedPetIndexStream(nextStream, previousStream);
        fetchPetSinkSubscription = FetchPetSink.start(selectedPetIndexStream);

        petSelector = renderPetSelector({nextStream, previousStream, selectedPetIndexStream});
    });

    afterEach(() => {
        fetchPetSinkSubscription.unsubscribe()
    });

    it('adds one to the pet selector label', () => {
        expect(petSelector.label()).toEqual('1');
        petSelector.next();
        expect(petSelector.label()).toEqual('2');
    });

    it('fetches the name of the pet with the associated id', () => {
        petSelector.next();
        expect(PetRepository.get).toHaveBeenCalledWith(2);
    })
});