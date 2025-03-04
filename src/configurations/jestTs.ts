import { jest } from './jest';
import { config } from 'typescript-eslint';

export const jestTs = config({
    extends: [jest],
    rules: {
        // --- Off rules ---
        '@typescript-eslint/unbound-method': 'off',

        // --- Error rules ---
        'jest/unbound-method': 'error',
    },
});
