import {createNextStream, createPreviousStream} from '../sources/intents'
import {createDidReceivePetStream} from '../sources/network';

export const createSources = () => {
    const next = createNextStream();
    const previous = createPreviousStream();
    const didReceivePet = createDidReceivePetStream();

    return {next, previous, didReceivePet}
};