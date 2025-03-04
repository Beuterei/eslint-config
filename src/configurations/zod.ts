import canonicalZod from 'eslint-config-canonical/configurations/zod.js';
import { config } from 'typescript-eslint';

export const zod = config(canonicalZod.recommended);
