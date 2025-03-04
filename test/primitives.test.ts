import {
    base,
    jsdoc,
    json,
    prettier,
    react,
    regexp,
    typescript,
    typescriptNoTypeChecking,
    yaml,
} from '../src/primitives';
import { describe, expect, it } from '@jest/globals';

describe('primitives', () => {
    describe('Exports array-based primitives', () => {
        const arrayConfigs = {
            base,
            jsdoc,
            json,
            prettier,
            react,
            regexp,
            typescript,
            typescriptNoTypeChecking,
            yaml,
        };

        it('should be defined', () => {
            for (const [, config] of Object.entries(arrayConfigs)) {
                expect(config).toBeDefined();
            }
        });

        it('should be arrays', () => {
            for (const [, config] of Object.entries(arrayConfigs)) {
                expect(Array.isArray(config)).toBe(true);
            }
        });
    });
});
