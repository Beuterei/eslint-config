import canonicalJson from 'eslint-config-canonical/configurations/json.js';
import eslintPluginJsonc from 'eslint-plugin-jsonc';
import { config } from 'typescript-eslint';

export const json = config({
    files: ['*.json', '**/*.json', '*.json5', '**/*.json5', '*.jsonc', '**/*.jsonc'],
    extends: [canonicalJson.recommended, eslintPluginJsonc.configs['flat/prettier']],
    rules: {
        // --- Off rules ---
        'jsonc/sort-keys': 'off',
    },
});
