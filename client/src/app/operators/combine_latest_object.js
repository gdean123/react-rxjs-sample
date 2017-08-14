import Rx from 'rxjs'

export const combineLatestObject = (mapOfStreams) => {
    const sources = [];
    const keys = [];
    for (const key in mapOfStreams) {
        if (mapOfStreams.hasOwnProperty(key)) {
            keys.push(key);
            sources.push(mapOfStreams[key]);
        }
    }

    return Rx.Observable.combineLatest(sources, function () {
        const combination = {};

        for (let i = arguments.length - 1; i >= 0; i--) {
            combination[keys[i]] = arguments[i];
        }

        return combination;
    })
};