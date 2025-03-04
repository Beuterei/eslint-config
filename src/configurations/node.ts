import canonicalNode from 'eslint-config-canonical/configurations/node.js';
import { config } from 'typescript-eslint';

export const node = config(canonicalNode.recommended);
