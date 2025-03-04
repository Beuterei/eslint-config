import canonicalModule from 'eslint-config-canonical/configurations/module.js';
import { config } from 'typescript-eslint';

export const module = config(canonicalModule.recommended);
