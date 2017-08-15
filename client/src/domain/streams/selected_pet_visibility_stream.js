import {computePetVisibility} from '../logic/compute_pet_visibility'
import {toggleVisibilityStream} from '../sources/intents'

export const selectedPetVisibilityStream = toggleVisibilityStream
    .scan(computePetVisibility, true)
    .startWith(true);