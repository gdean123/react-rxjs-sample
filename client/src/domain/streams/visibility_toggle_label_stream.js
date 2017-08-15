import {computeToggleButtonLabel} from '../logic/compute_toggle_button_label'
import {selectedPetVisibilityStream} from './selected_pet_visibility_stream'

export const visibilityToggleLabelStream = selectedPetVisibilityStream
    .map(selectedPetVisibility => computeToggleButtonLabel(selectedPetVisibility));