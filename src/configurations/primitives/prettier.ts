import { baseFileMatcher } from './base';
import canonicalPrettier from 'eslint-config-canonical/configurations/prettier';
import { config } from 'typescript-eslint';

export const prettier = config(
    {
        files: baseFileMatcher,
        extends: [canonicalPrettier.recommended],
        rules: {
            // --- Error rules ---
            'prettier/prettier': [
                'error',
                {
                    arrowParens: 'always',
                    printWidth: 100,
                    singleQuote: true,
                    tabWidth: 4,
                    trailingComma: 'all',
                },
                {
                    usePrettierrc: false,
                },
            ],
        },
    },
    {
        files: ['**/*.{json,json5,jsonc,yml,yaml}'],
        extends: [canonicalPrettier.recommended],
        rules: {
            // --- Error rules ---
            'prettier/prettier': [
                'error',
                {
                    printWidth: 100,
                    tabWidth: 2,
                },
                {
                    usePrettierrc: false,
                },
            ],
        },
    },
);
