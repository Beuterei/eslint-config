import { vitest } from '../../src';
import { base } from '../../src/primitives';
import { expectLintResults, expectNoFilesMatched, verboseLogLintResults } from '../helper/eslint';
import { describe, expect, it } from '@jest/globals';
import { ESLint, type Linter } from 'eslint';
import { config } from 'typescript-eslint';

describe('vitest', () => {
    it('should be able to be initialized by eslint', async () => {
        expect.assertions(2);

        const eslint = new ESLint({
            baseConfig: config(base, {
                files: ['**/*.js'],
                extends: [vitest],
            }) as Linter.Config[],
            overrideConfigFile: true,
        });

        const results = await eslint.lintFiles(['test/helper/veryBadFiles/veryBadVitest.js']);

        verboseLogLintResults(results);

        expectLintResults(results, ['no-undef', 'vitest/expect-expect']);
    });

    it('should not not lint not matching files', async () => {
        expect.assertions(4);

        const eslint = new ESLint({
            baseConfig: config(base, {
                files: ['**/*.mjs'],
                extends: [vitest],
            }) as Linter.Config[],
            overrideConfigFile: true,
        });

        const results = await eslint.lintFiles(['test/helper/markdown.md']);

        verboseLogLintResults(results);

        expectNoFilesMatched(results);
    });
});
