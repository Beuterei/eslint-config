import canonicalCypress from 'eslint-config-canonical/configurations/cypress';
import { config } from 'typescript-eslint';

export const cypress = config(canonicalCypress.recommended);
