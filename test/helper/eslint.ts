import { expect } from '@jest/globals';
import { type ESLint } from 'eslint';

export const expectLintResults = (results: ESLint.LintResult[], expectedRuleIds: string[]) => {
    const actualRuleIds = results.flatMap((result) =>
        result.messages.map((message) => message.ruleId),
    );

    expect(actualRuleIds).toEqual(expect.arrayContaining(expectedRuleIds));

    const totalErrorCount = results.reduce((sum, result) => sum + result.errorCount, 0);
    expect(totalErrorCount).toBe(expectedRuleIds.length);
};

export const expectNoFilesMatched = (results: ESLint.LintResult[]) => {
    expect(results.length).toBe(1);
    expect(results[0].messages).toHaveLength(1);
    expect(results[0].messages[0].ruleId).toBeNull();
    expect(results[0].messages[0].message).toEqual(
        'File ignored because no matching configuration was supplied.',
    );
};

export const verboseLogLintResults = (results: ESLint.LintResult[]) => {
    if (process.env.VERBOSE) {
        const testName = expect.getState().currentTestName;

        const messageLines = results
            .flatMap((result) =>
                result.messages.map((message) => {
                    const location = message.line ? ` ${message.line}:${message.column}` : '';
                    return [
                        `\u001B[32mRule ID: ${message.ruleId}\u001B[0m${location}`,
                        `\u001B[33mMessage: ${message.message}\u001B[0m`,
                    ];
                }),
            )
            .flat();

        const output = [`\u001B[36mTest: ${testName}\u001B[0m`, ...messageLines].join('\n');

        console.log(output);
    }
};
