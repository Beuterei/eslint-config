import { typescriptNoTypeChecking } from '../primitives';
import { base } from './primitives/base';
import { jsdoc } from './primitives/jsdoc';
import { json } from './primitives/json';
import { prettier } from './primitives/prettier';
import { react } from './primitives/react';
import { regexp } from './primitives/regexp';
import { yaml } from './primitives/yaml';
import { config } from 'typescript-eslint';

export const autoNoTypeChecking = config(
    base,
    jsdoc,
    typescriptNoTypeChecking,
    regexp,
    react,
    json,
    yaml,
    prettier,
);
