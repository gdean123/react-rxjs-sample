import Rx from 'rxjs'
import {nextStream, previousStream} from '../sources/intents'
import {computePetIndex} from '../logic/compute_pet_index'

export const selectedPetIndexStream = Rx.Observable
    .merge(nextStream.mapTo(1), previousStream.mapTo(-1))
    .scan(computePetIndex, 1);