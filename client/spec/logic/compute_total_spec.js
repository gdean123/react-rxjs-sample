import {computeTotal} from '../../src/app/logic/compute_total'

describe("computeTotal", () => {
    it("adds the current value to the existing total", () => {
        expect(computeTotal(123, 1)).toEqual(124);
    });

    it("does not decrement past 1", () => {
        expect(computeTotal(1, -1)).toEqual(1);
    });
});