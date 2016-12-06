import Rx from 'rxjs'
import {incrementStream, decrementStream} from '../sources/intents'
import {computeTotal} from '../logic/compute_total'

export const totalStream = Rx.Observable
    .merge(incrementStream.mapTo(1), decrementStream.mapTo(-1))
    .scan(computeTotal, 1);