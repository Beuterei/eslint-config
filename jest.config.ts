/* eslint-disable canonical/filename-match-exported */
import { type Config } from 'jest';

const config: Config = {
    moduleFileExtensions: ['js', 'json', 'ts'],
    testRegex: '\\.(component-)?test\\.ts$',
    transform: {
        '^.+\\.(t|j)s$': 'ts-jest',
    },
    moduleDirectories: ['node_modules', '<rootDir>'],
    coverageDirectory: 'coverage',
    collectCoverageFrom: ['src/**/*.ts'],
    coveragePathIgnorePatterns: [],
    testEnvironment: 'node',
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
        },
    },
    injectGlobals: false,
    testPathIgnorePatterns: ['test/helper/veryBadFiles/'],
};

export default config;
