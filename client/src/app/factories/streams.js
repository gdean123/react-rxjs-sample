import {createSelectedPetIndexStream} from '../streams/selected_pet_index_stream';
import {createSelectedPetVisibilityStream} from '../streams/selected_pet_visibility_stream';
import {createVisibilityToggleLabelStream} from '../streams/visibility_toggle_label_stream';

export const createStreams = (sources) => {
    const selectedPetIndex = createSelectedPetIndexStream(sources.next, sources.previous);
    const selectedPetVisibility = createSelectedPetVisibilityStream(sources.toggleVisibility);
    const visibilityToggleLabel = createVisibilityToggleLabelStream(selectedPetVisibility);

    return {selectedPetIndex, selectedPetVisibility, visibilityToggleLabel}
};