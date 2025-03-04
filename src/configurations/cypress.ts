import canonicalCypress from 'eslint-config-canonical/configurations/cypress.js';
import { config } from 'typescript-eslint';

export const cypress = config(canonicalCypress.recommended);
