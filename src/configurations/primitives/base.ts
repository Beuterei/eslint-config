import canonical from 'eslint-config-canonical/configurations/canonical';
import { config } from 'typescript-eslint';

export const baseFileMatcher = ['**/*.{js,jsx,cjs,mjs,ts,tsx}'];

export const base = config({
    files: baseFileMatcher,
    extends: [canonical.recommended],
    rules: {
        // --- Off rules ---
        'perfectionist/sort-decorators': 'off',

        // --- Warn rules ---
        'canonical/filename-match-regex': [
            'warn',
            {
                ignoreExporting: false,
                regex: '^[A-Za-z]+(?:[-A-Za-z0-9]*.[A-Za-z0-9]+)*d*$',
            },
        ],

        // --- Error rules ---
        'canonical/id-match': [
            'error',
            '(?=.*[A-Za-z])(?:^[A-Za-z0-9]+(?:[A-Z][a-z0-9]*)*$)|(?=.*[A-Z])(?:^[A-Z0-9]+(_[A-Z0-9]+)*$)|(^(_|\\$)$)',
            {
                ignoreDestructuring: true,
                ignoreNamedImports: true,
                onlyDeclarations: true,
                properties: true,
            },
        ],
        'id-length': [
            'error',
            {
                exceptions: ['$', '_', 'a', 'b', 'i', 'j', 'x', 'y', 'z'],
            },
        ],
        'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
});
