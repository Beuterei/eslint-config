import canonicalYaml from 'eslint-config-canonical/configurations/yaml.js';
import eslintPluginYml from 'eslint-plugin-yml';
import { config } from 'typescript-eslint';

export const yaml = config({
    extends: [canonicalYaml.recommended, eslintPluginYml.configs['flat/prettier']],
    files: ['**/*.{yaml,yml}'],
});
