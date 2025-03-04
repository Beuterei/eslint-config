import { typescriptNoTypeChecking } from './typescript-no-type-checking';
import canonicalTypescriptTypeChecking from 'eslint-config-canonical/configurations/typescript-type-checking.js';
import { config } from 'typescript-eslint';

export const typescript = config(typescriptNoTypeChecking, {
    files: ['**/*.{ts,tsx}'],
    extends: [canonicalTypescriptTypeChecking.recommended],
});
