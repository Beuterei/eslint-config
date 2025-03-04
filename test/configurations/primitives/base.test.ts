import { base } from '../../../src/primitives';
import {
    expectLintResults,
    expectNoFilesMatched,
    verboseLogLintResults,
} from '../../helper/eslint';
import { describe, expect, it } from '@jest/globals';
import { ESLint, type Linter } from 'eslint';

describe('base', () => {
    it('should be able to be initialized by eslint', async () => {
        expect.assertions(2);

        const eslint = new ESLint({
            baseConfig: base as Linter.Config[],
            overrideConfigFile: true,
        });

        const results = await eslint.lintFiles(['test/helper/veryBadFiles/veryBadBase.js']);

        verboseLogLintResults(results);

        expectLintResults(results, ['id-length', 'no-unused-vars', '@stylistic/eol-last']);
    });

    it('should not lint not matching files', async () => {
        expect.assertions(4);

        const eslint = new ESLint({
            baseConfig: base as Linter.Config[],
            overrideConfigFile: true,
        });

        const results = await eslint.lintFiles(['test/helper/markdown.md']);

        expectNoFilesMatched(results);
    });
});
