import Rx from 'rxjs'
import {computePetIndex} from '../logic/compute_pet_index'

export const createSelectedPetIndexStream = (nextStream, previousStream) => Rx.Observable
    .merge(nextStream.mapTo(1), previousStream.mapTo(-1))
    .scan(computePetIndex, 1);