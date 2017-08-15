import Rx from 'rxjs'
import {combineLatestObject} from '../../../src/domain/operators/combine_latest_object'

describe('combineLatestObject', () => {
    let colorStream, cityStream, combinedObject;

    beforeEach(() => {
        colorStream = new Rx.Subject();
        cityStream = new Rx.Subject();

        const combinedObjectStream = combineLatestObject({
            color: colorStream,
            city: cityStream
        });

        combinedObjectStream.subscribe(latestCombinedObject => {
            combinedObject = latestCombinedObject
        });
    });

    it('emits the combined object whenever any of the input streams emit', () => {
        colorStream.next('violet');
        expect(combinedObject).toBeUndefined();

        cityStream.next('Santa Monica');
        expect(combinedObject).toEqual({
            color: 'violet',
            city: 'Santa Monica'
        });
    });
});