export const createSelectedPetStateStream = (didReceivePet) =>
    didReceivePet.map(pet => {
        return {
            pet: pet
        }
    });