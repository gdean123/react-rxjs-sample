import React from 'react';
import Rx from 'rxjs';

import {PetRepository} from '../../src/app/repositories/pet_repository';
import {fetchPetSink} from '../../src/app/sinks/network/fetch_pet_sink'

describe('initial state', () => {
    it('fetches the first pet', () => {
        spyOn(PetRepository, 'get').and.returnValue(Rx.Observable.never());

        fetchPetSink.start();
        expect(PetRepository.get).toHaveBeenCalledWith(1);
        fetchPetSink.stop();
    });
});