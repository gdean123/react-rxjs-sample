import Rx from 'rxjs'
import {incrementStream, decrementStream} from '../sources/intents'

export const totalStream = Rx.Observable.merge(incrementStream.mapTo(1), decrementStream.mapTo(-1))
    .scan((accumulator, currentValue) => {
        const newTotal = accumulator + currentValue;
        if (newTotal < 1) {
            return 1;
        } else {
            return newTotal;
        }
    }, 1);