import Rx from 'rxjs'
import {didClickIncrementStream, didClickDecrementStream} from './intents'

export const totalStream = Rx.Observable.merge(didClickIncrementStream.mapTo(1), didClickDecrementStream.mapTo(-1))
    .scan((accumulator, currentValue) => accumulator + currentValue, 0);