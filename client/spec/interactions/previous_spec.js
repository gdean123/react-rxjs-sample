import React from 'react';
import Rx from 'rxjs'

import renderPetSelector from '../components/pet_selector';
import PetSelector from '../../src/app/sinks/components/pet_selector';
import {FetchPetSink} from '../../src/app/sinks/network/fetch_pet_sink';
import {createSelectedPetIndexStream} from '../../src/app/streams/selected_pet_index_stream';
import {PetRepository} from '../../src/app/repositories/pet_repository';

describe('clicking previous', () => {
    let petSelector, fetchPetSinkSubscription;

    beforeEach(() => {
        spyOn(PetRepository, 'get').and.returnValue(Rx.Observable.never());

        const nextStream = new Rx.Subject();
        const previousStream = new Rx.Subject();
        const selectedPetIndexStream = createSelectedPetIndexStream(nextStream, previousStream);
        fetchPetSinkSubscription = FetchPetSink.start(selectedPetIndexStream);

        petSelector = renderPetSelector(<PetSelector nextStream={nextStream} previousStream={previousStream} selectedPetIndexStream={selectedPetIndexStream}/>);
    });

    afterEach(() => {
        fetchPetSinkSubscription.unsubscribe()
    });

    it('subtracts one from the pet selector label', () => {
        expect(petSelector.label()).toEqual('1');
        petSelector.next();
        expect(petSelector.label()).toEqual('2');

        petSelector.previous();
        expect(petSelector.label()).toEqual('1');
    });
});