import { base } from './primitives/base';
import { jsdoc } from './primitives/jsdoc';
import { json } from './primitives/json';
import { prettier } from './primitives/prettier';
import { react } from './primitives/react';
import { regexp } from './primitives/regexp';
import { typescript } from './primitives/typescript';
import { yaml } from './primitives/yaml';
import { config } from 'typescript-eslint';

export const auto = config(base, jsdoc, typescript, regexp, react, json, yaml, prettier);
