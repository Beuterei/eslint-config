import canonicalJsxA11y from 'eslint-config-canonical/configurations/jsx-a11y.js';
import canonicalReact from 'eslint-config-canonical/configurations/react.js';
import pluginTestingLibrary from 'eslint-plugin-testing-library';
import { config } from 'typescript-eslint';

export const react = config({
    files: ['**/*.{jsx,tsx}'],
    extends: [
        canonicalReact.recommended,
        canonicalJsxA11y.recommended,
        pluginTestingLibrary.configs['flat/react'],
    ],
});
