import { baseFileMatcher } from './base';
import canonicalRegexp from 'eslint-config-canonical/configurations/regexp.js';
import { config } from 'typescript-eslint';

export const regexp = config({
    files: baseFileMatcher,
    extends: [canonicalRegexp.recommended],
    rules: {
        // --- Warn rules ---
        'regexp/prefer-regexp-test': 'warn',
        'regexp/require-unicode-regexp': 'warn',

        // --- Error rules ---
        'regexp/hexadecimal-escape': ['error', 'always'],
        'regexp/no-contradiction-with-assertion': 'error',
        'regexp/no-control-character': 'error',
        'regexp/no-empty-character-class': 'error',
        'regexp/no-extra-lookaround-assertions': ['error'],
        'regexp/no-misleading-capturing-group': ['error', { reportBacktrackingEnds: true }],
        'regexp/no-misleading-unicode-character': 'error',
        'regexp/no-missing-g-flag': ['error'],
        'regexp/no-octal': 'error',
        'regexp/no-standalone-backslash': 'error',
        'regexp/no-super-linear-move': 'error',
        'regexp/prefer-escape-replacement-dollar-char': 'error',
        'regexp/prefer-quantifier': 'error',
        'regexp/prefer-regexp-exec': 'error',
    },
});
