import canonicalNode from 'eslint-config-canonical/configurations/node';
import { config } from 'typescript-eslint';

export const node = config(canonicalNode.recommended);
