import canonicalVitest from 'eslint-config-canonical/configurations/vitest.js';
import { config } from 'typescript-eslint';

export const vitest = config(canonicalVitest.recommended);
