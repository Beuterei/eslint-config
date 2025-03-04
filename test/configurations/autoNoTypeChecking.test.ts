import { autoNoTypeChecking } from '../../src';
import { expectLintResults, expectNoFilesMatched, verboseLogLintResults } from '../helper/eslint';
import { describe, expect, it } from '@jest/globals';
import { ESLint, type Linter } from 'eslint';

describe('auto', () => {
    it('should be able to be initialized by eslint', async () => {
        expect.assertions(2);

        const eslint = new ESLint({
            baseConfig: autoNoTypeChecking as Linter.Config[],
            overrideConfigFile: true,
        });

        const results = await eslint.lintFiles(['test/helper/veryBadFiles/veryBadAuto.ts']);

        verboseLogLintResults(results);

        expectLintResults(results, ['id-length', '@typescript-eslint/no-unused-vars']);
    });

    it('should not lint not matching files', async () => {
        expect.assertions(4);

        const eslint = new ESLint({
            baseConfig: autoNoTypeChecking as Linter.Config[],
            overrideConfigFile: true,
        });

        const results = await eslint.lintFiles(['test/helper/markdown.md']);

        expectNoFilesMatched(results);
    });
});
