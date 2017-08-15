export const computePetIndex = (accumulator, currentValue) => {
    const newIndex = accumulator + currentValue;

    if (newIndex < 1) {
        return 1;
    } else {
        return newIndex;
    }
};