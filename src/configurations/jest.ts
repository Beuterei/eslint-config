import canonicalJest from 'eslint-config-canonical/configurations/jest.js';
import pluginJestDom from 'eslint-plugin-jest-dom';
import { config } from 'typescript-eslint';

export const jest = config({
    extends: [canonicalJest.recommended, pluginJestDom.configs['flat/recommended']],
    rules: {
        // --- Off rules ---
        'func-names': 'off',
    },
});
