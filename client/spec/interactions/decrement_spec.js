import React from 'react';

import renderCounter from '../components/counter';
import Counter from '../../src/app/sinks/components/counter';

describe("clicking decrement", () => {
    let counter;

    beforeEach(() => {
        counter = renderCounter(<Counter/>);
    });

    it("subtracts one to the counter", () => {
        expect(counter.label()).toEqual('1');
        counter.increment();
        expect(counter.label()).toEqual('2');

        counter.decrement();
        expect(counter.label()).toEqual('1');
    });

    it("does not decrement past 1", () => {
        expect(counter.label()).toEqual('1');
        counter.decrement();
        expect(counter.label()).toEqual('1');

        counter.decrement();
        counter.decrement();
        counter.increment();

        expect(counter.label()).toEqual('2');
    });
});