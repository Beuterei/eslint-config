import { base, prettier, typescript } from '../../../src/primitives';
import {
    expectLintResults,
    expectNoFilesMatched,
    verboseLogLintResults,
} from '../../helper/eslint';
import { describe, expect, it } from '@jest/globals';
import { ESLint, type Linter } from 'eslint';
import { config } from 'typescript-eslint';

describe('typescript', () => {
    it('should be able to be initialized by eslint', async () => {
        expect.assertions(2);

        const eslint = new ESLint({
            baseConfig: config(base, typescript, prettier) as Linter.Config[], // Workaround for https://github.com/gajus/eslint-config-canonical/issues/95
            overrideConfigFile: true,
        });

        const results = await eslint.lintFiles(['test/helper/veryBadFiles/veryBadTypescript.ts']);

        verboseLogLintResults(results);

        expectLintResults(results, ['@typescript-eslint/no-floating-promises']);
    });

    it('should not lint not matching files', async () => {
        expect.assertions(4);

        const eslint = new ESLint({
            baseConfig: config(base, typescript, prettier) as Linter.Config[],
            overrideConfigFile: true,
        });

        const results = await eslint.lintFiles(['test/helper/markdown.md']);

        expectNoFilesMatched(results);
    });
});
