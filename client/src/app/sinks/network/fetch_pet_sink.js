import {PetRepository} from '../../repositories/pet_repository';
import {selectedPetIndexStream} from '../../streams/selected_pet_index_stream';
import {didReceivePetStream} from "../../sources/network";

class FetchPetSink {
    start() {
        this.subscription = selectedPetIndexStream.subscribe(selectedPetIndex => {
            PetRepository.get(selectedPetIndex).subscribe(pet => {
                didReceivePetStream.next(pet);
            })
        })
    }

    stop() {
        this.subscription.unsubscribe();
    }
}

export const fetchPetSink = new FetchPetSink();