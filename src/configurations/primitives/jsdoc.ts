import { baseFileMatcher } from './base';
import canonicalJsdoc from 'eslint-config-canonical/configurations/jsdoc.js';
import eslintPluginJsonc from 'eslint-plugin-jsonc';
import { config } from 'typescript-eslint';

export const jsdoc = config(
    {
        files: baseFileMatcher,
        extends: [canonicalJsdoc.recommended],
    },
    eslintPluginJsonc.configs['flat/prettier'],
);
