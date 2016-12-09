import {createSelectedPetIndexStream} from '../streams/selected_pet_index_stream';

export const createStreams = (sources) => {
    const selectedPetIndex = createSelectedPetIndexStream(sources.next, sources.previous);

    return {selectedPetIndex}
};