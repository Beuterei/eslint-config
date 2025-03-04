import {
    auto,
    autoNoTypeChecking,
    browser,
    cypress,
    jest,
    jestTs,
    module,
    node,
    vitest,
    zod,
} from '../src';
import { describe, expect, it } from '@jest/globals';

describe('index', () => {
    describe('Exports array-based configurations', () => {
        const arrayConfigs = {
            auto,
            autoNoTypeChecking,
            jest,
            jestTs,
            browser,
            cypress,
            module,
            node,
            vitest,
            zod,
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
