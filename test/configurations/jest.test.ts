import { jest, node } from '../../src';
import { base } from '../../src/primitives';
import { expectLintResults, expectNoFilesMatched, verboseLogLintResults } from '../helper/eslint';
import { describe, expect, it } from '@jest/globals';
import { ESLint, type Linter } from 'eslint';
import { config } from 'typescript-eslint';

describe('jest', () => {
    it('should be able to be initialized by eslint', async () => {
        expect.assertions(2);

        const eslint = new ESLint({
            baseConfig: config(base, {
                files: ['**/*.test.js'],
                extends: [node, jest],
            }) as Linter.Config[],
            overrideConfigFile: true,
        });

        const results = await eslint.lintFiles(['test/helper/veryBadFiles/veryBadJest.test.js']);

        verboseLogLintResults(results);

        expectLintResults(results, ['jest/prefer-todo', 'jest/expect-expect']);
    });

    it('should not not lint not matching files', async () => {
        expect.assertions(4);

        const eslint = new ESLint({
            baseConfig: config(base, {
                files: ['**/*.test.js'],
                extends: [node, jest],
            }) as Linter.Config[],
            overrideConfigFile: true,
        });

        const results = await eslint.lintFiles(['test/helper/markdown.md']);

        verboseLogLintResults(results);

        expectNoFilesMatched(results);
    });
});
