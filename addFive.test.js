const { default: TestRunner } = require('jest-runner');
const addFive = require('./addFive');
const { default: expect } = require('expect');

test('return the value plus 5', () => {
    expect(addFive(1)).toBe(6);
})