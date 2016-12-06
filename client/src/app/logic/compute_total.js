export const computeTotal = (accumulator, currentValue) => {
    const newTotal = accumulator + currentValue;
    if (newTotal < 1) {
        return 1;
    } else {
        return newTotal;
    }
};