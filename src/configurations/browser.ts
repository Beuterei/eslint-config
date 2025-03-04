import canonicalBrowser from 'eslint-config-canonical/configurations/browser';
import compat from 'eslint-plugin-compat';
import { config } from 'typescript-eslint';

export const browser = config(canonicalBrowser.recommended, compat.configs['flat/recommended']);
