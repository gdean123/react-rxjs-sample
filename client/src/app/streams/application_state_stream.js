export const createApplicationStateStream = (selectedPetVisibilityStream) =>
    selectedPetVisibilityStream.map(selectedPetIsVisible => {
        return {selectedPetIsVisible}
    });