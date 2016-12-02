import Rx from 'rxjs'
import {didClickIncrementStream, didClickDecrementStream} from '../sources/intents'

export const totalStream = Rx.Observable.merge(didClickIncrementStream.mapTo(1), didClickDecrementStream.mapTo(-1))
    .scan((accumulator, currentValue) => {
        const newTotal = accumulator + currentValue;
        if (newTotal < 1) {
            return 1;
        } else {
            return newTotal;
        }
    }, 1);