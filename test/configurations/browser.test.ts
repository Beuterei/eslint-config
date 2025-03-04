import { browser } from '../../src';
import { base } from '../../src/primitives';
import { expectLintResults, expectNoFilesMatched, verboseLogLintResults } from '../helper/eslint';
import { describe, expect, it } from '@jest/globals';
import { ESLint, type Linter } from 'eslint';
import { config } from 'typescript-eslint';

describe('browser', () => {
    it('should be able to be initialized by eslint', async () => {
        expect.assertions(2);

        const eslint = new ESLint({
            baseConfig: config(base, {
                files: ['**/*.js'],
                extends: [browser],
            }) as Linter.Config[],
            overrideConfigFile: true,
        });

        const results = await eslint.lintFiles(['test/helper/veryBadFiles/veryBadBrowser.js']);

        verboseLogLintResults(results);

        expectLintResults(results, ['unicorn/prefer-dom-node-append']);
    });

    it('should not not lint not matching files', async () => {
        expect.assertions(4);

        const eslint = new ESLint({
            baseConfig: config(base, {
                files: ['**/*.js'],
                extends: [browser],
            }) as Linter.Config[],
            overrideConfigFile: true,
        });

        const results = await eslint.lintFiles(['test/helper/markdown.md']);

        verboseLogLintResults(results);

        expectNoFilesMatched(results);
    });
});
