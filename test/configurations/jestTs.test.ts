import { jestTs } from '../../src';
import { base, prettier, typescript } from '../../src/primitives';
import { expectLintResults, expectNoFilesMatched, verboseLogLintResults } from '../helper/eslint';
import { describe, expect, it } from '@jest/globals';
import { ESLint, type Linter } from 'eslint';
import { config } from 'typescript-eslint';

describe('jest', () => {
    it('should be able to be initialized by eslint', async () => {
        expect.assertions(2);

        const eslint = new ESLint({
            baseConfig: config(base, typescript, prettier, {
                // Workaround for https://github.com/gajus/eslint-config-canonical/issues/95
                files: ['**/*.test.ts'],
                extends: [jestTs],
            }) as Linter.Config[],
            overrideConfigFile: true,
        });

        const results = await eslint.lintFiles(['test/helper/veryBadFiles/veryBadJest.test.ts']);

        verboseLogLintResults(results);

        expectLintResults(results, [
            'jest/unbound-method',
            'jest/prefer-todo',
            'jest/expect-expect',
        ]);
    });

    it('should not not lint not matching files', async () => {
        expect.assertions(4);

        const eslint = new ESLint({
            baseConfig: config(base, typescript, prettier, {
                files: ['**/*.test.ts'],
                extends: [jestTs],
            }) as Linter.Config[],
            overrideConfigFile: true,
        });

        const results = await eslint.lintFiles(['test/helper/markdown.md']);

        verboseLogLintResults(results);

        expectNoFilesMatched(results);
    });
});
