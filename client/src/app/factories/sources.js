import {createNextStream, createPreviousStream, createToggleVisibilityStream} from '../sources/intents'
import {createDidReceivePetStream} from '../sources/network';

export const createSources = () => {
    const next = createNextStream();
    const previous = createPreviousStream();
    const toggleVisibility = createToggleVisibilityStream();

    const didReceivePet = createDidReceivePetStream();

    return {next, previous, toggleVisibility, didReceivePet}
};