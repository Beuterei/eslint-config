import { describe, expect, it } from '@jest/globals';

describe('unbound method example', () => {
    class Calculator {
        value = 0;

        add(number_: number): number {
            this.value += number_;
            return this.value;
        }
    }

    it('should fail due to unbound method', () => {
        const calculator = new Calculator();
        const addFunction = calculator.add;
        expect(addFunction(5)).toBe(5);
    });

    it('foo', () => {});
});
