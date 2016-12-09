import {PetRepository} from '../../repositories/pet_repository';

export const FetchPetSink = {
    start: (selectedPetIndexStream, didReceivePet) => selectedPetIndexStream.subscribe(selectedPetIndex => {
        PetRepository.get(selectedPetIndex).subscribe(pet => {
            didReceivePet.next(pet);
        })
    })
};