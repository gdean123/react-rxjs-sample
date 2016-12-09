import {FetchPetSink} from '../sinks/network/fetch_pet_sink'

export const createSinks = (sources, streams) => {
    const fetchPet = new FetchPetSink({selectedPetIndexStream: streams.selectedPetIndex, didReceivePetStream: sources.didReceivePet});

    return {fetchPet}
};