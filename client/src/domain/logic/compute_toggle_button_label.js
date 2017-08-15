export const computeToggleButtonLabel = (selectedPetIsVisible) => {
    if (selectedPetIsVisible) {
        return 'Hide'
    } else {
        return 'Show'
    }
};