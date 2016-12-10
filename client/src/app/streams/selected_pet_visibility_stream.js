import {computePetVisibility} from '../logic/compute_pet_visibility'

export const createSelectedPetVisibilityStream = (toggleVisibilityStream) => toggleVisibilityStream
    .scan(computePetVisibility, true);