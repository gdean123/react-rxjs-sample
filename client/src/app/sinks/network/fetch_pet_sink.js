import {PetRepository} from '../../repositories/pet_repository';

export class FetchPetSink {
    constructor({selectedPetIndexStream, didReceivePetStream}) {
        this.selectedPetIndexStream = selectedPetIndexStream;
        this.didReceivePetStream = didReceivePetStream;
    }

    start() {
        return this.selectedPetIndexStream.subscribe(selectedPetIndex => {
            PetRepository.get(selectedPetIndex).subscribe(pet => {
                this.didReceivePetStream.next(pet);
            })
        })
    }
}