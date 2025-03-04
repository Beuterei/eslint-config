import canonicalTypescript from 'eslint-config-canonical/configurations/typescript';
import { config } from 'typescript-eslint';

export const typescriptNoTypeChecking = config(
    {
        files: ['**/*.{ts,tsx}'],
        extends: [canonicalTypescript.recommended],
        rules: {
            // --- Error rules ---
            '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
            '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        },
    },
    {
        files: ['**/*.d.ts'],
        rules: {
            // --- Off rules ---
            '@typescript-eslint/consistent-type-definitions': 'off',
            '@typescript-eslint/no-empty-interface': 'off',
            '@typescript-eslint/no-invalid-void-type': 'off',
            '@typescript-eslint/no-shadow': 'off',
            'import/no-unassigned-import': 'off',
            'no-var': 'off',
            'vars-on-top': 'off',
        },
    },
);
