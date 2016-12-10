import {computeToggleButtonLabel} from '../logic/compute_toggle_button_label'

export const createVisibilityToggleLabelStream = (selectedPetVisibilityStream) => selectedPetVisibilityStream
    .map(selectedPetVisibility => computeToggleButtonLabel(selectedPetVisibility));