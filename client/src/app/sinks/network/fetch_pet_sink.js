import {selectedPetIndexStream} from '../../streams/selected_pet_index_stream';
import {didReceivePet} from '../../sources/network';
import {PetRepository} from '../../repositories/pet_repository';

export default selectedPetIndexStream.subscribe(selectedPetIndex => {
    PetRepository.get(selectedPetIndex).subscribe(pet => {
        didReceivePet.next(pet);
    })
});