import React from 'react';

import renderCounter from '../components/counter';
import Counter from '../../src/app/sinks/components/counter';

describe("clicking increment", () => {
    let counter;

    beforeEach(() => {
        counter = renderCounter(<Counter/>);
    });

    it("adds one to the counter", () => {
        expect(counter.label()).toEqual('1');
        counter.increment();
        expect(counter.label()).toEqual('2');
    });
});