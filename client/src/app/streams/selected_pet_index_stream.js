import Rx from 'rxjs'
import {computePetIndex} from '../logic/compute_pet_index'
import {nextStream, previousStream} from "../sources/intents";

export const selectedPetIndexStream = Rx.Observable
    .merge(Rx.Observable.of(1), nextStream.mapTo(1), previousStream.mapTo(-1))
    .scan(computePetIndex, 0);