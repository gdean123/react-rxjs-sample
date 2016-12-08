import {computePetIndex} from '../../src/app/logic/compute_pet_index'

describe("computePetIndex", () => {
    it("adds the current value to the existing index", () => {
        expect(computePetIndex(123, 1)).toEqual(124);
    });

    it("does not decrement past 1", () => {
        expect(computePetIndex(1, -1)).toEqual(1);
    });
});