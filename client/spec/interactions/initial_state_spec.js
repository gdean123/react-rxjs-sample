import React from 'react';
import Rx from 'rxjs';

import {createApplication} from '../../src/app/factories/application'
import {PetRepository} from '../../src/app/repositories/pet_repository';

describe('initial state', () => {
    let application;

    beforeEach(() => {
        application = createApplication();
    });

    it('fetches the first pet', () => {
        spyOn(PetRepository, 'get').and.returnValue(Rx.Observable.never());

        application.sinks.fetchPet.start();
        expect(PetRepository.get).toHaveBeenCalledWith(1);
        application.sinks.fetchPet.stop();
    });
});