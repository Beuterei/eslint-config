import { base, yaml } from '../../../src/primitives';
import {
    expectLintResults,
    expectNoFilesMatched,
    verboseLogLintResults,
} from '../../helper/eslint';
import { describe, expect, it } from '@jest/globals';
import { ESLint, type Linter } from 'eslint';
import { config } from 'typescript-eslint';

describe('yaml', () => {
    it('should be able to be initialized by eslint', async () => {
        expect.assertions(2);

        const eslint = new ESLint({
            baseConfig: config(base, yaml) as Linter.Config[],
            overrideConfigFile: true,
        });

        const results = await eslint.lintFiles(['test/helper/veryBadFiles/veryBadYaml.yaml']);

        verboseLogLintResults(results);

        expectLintResults(results, ['yml/no-empty-mapping-value']);
    });

    it('should not lint not matching files', async () => {
        expect.assertions(4);

        const eslint = new ESLint({
            baseConfig: config(base, yaml) as Linter.Config[],
            overrideConfigFile: true,
        });

        const results = await eslint.lintFiles(['test/helper/markdown.md']);

        expectNoFilesMatched(results);
    });
});
