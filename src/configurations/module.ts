import canonicalModule from 'eslint-config-canonical/configurations/module';
import { config } from 'typescript-eslint';

export const module = config(canonicalModule.recommended);
