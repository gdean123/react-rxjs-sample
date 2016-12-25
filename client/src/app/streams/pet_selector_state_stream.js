export const createPetSelectorStateStream = (selectedPetIndexStream) =>
    selectedPetIndexStream.map(selectedPetIndex => {
        return {selectedPetIndex}
    });