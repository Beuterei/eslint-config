import canonicalZod from 'eslint-config-canonical/configurations/zod';
import { config } from 'typescript-eslint';

export const zod = config(canonicalZod.recommended);
