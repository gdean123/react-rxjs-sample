import {createDidReceivePetStream} from '../sources/network';
import {createNextStream, createPreviousStream} from '../sources/intents'

export const createSources = () => {
    const next = createNextStream();
    const previous = createPreviousStream();
    const didReceivePet = createDidReceivePetStream();

    return {next, previous, didReceivePet}
};