import { base, react } from '../../../src/primitives';
import {
    expectLintResults,
    expectNoFilesMatched,
    verboseLogLintResults,
} from '../../helper/eslint';
import { describe, expect, it } from '@jest/globals';
import { ESLint, type Linter } from 'eslint';
import { config } from 'typescript-eslint';

describe('react', () => {
    it('should be able to be initialized by eslint', async () => {
        expect.assertions(2);

        const eslint = new ESLint({
            baseConfig: config(base, react, {
                // Small workaround config to suppress the react version warning
                files: ['**/*.jsx'],
                settings: {
                    react: {
                        version: '18',
                    },
                },
            }) as Linter.Config[],
            overrideConfigFile: true,
        });

        const results = await eslint.lintFiles(['test/helper/veryBadFiles/veryBadReact.jsx']);

        verboseLogLintResults(results);

        expectLintResults(results, ['react/function-component-definition']);
    });

    it('should not not lint not matching files', async () => {
        expect.assertions(4);

        const eslint = new ESLint({
            baseConfig: config(base, react) as Linter.Config[],
            overrideConfigFile: true,
        });

        const results = await eslint.lintFiles(['test/helper/markdown.md']);

        verboseLogLintResults(results);

        expectNoFilesMatched(results);
    });
});
