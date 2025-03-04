import { auto, jestTs } from './src';
import { config } from 'typescript-eslint';

export default config(
    auto,
    {
        extends: [jestTs],
        files: [
            '**/*.?(component-){spec,test}.ts',
            '**/{__mocks__,__tests__}/**/*.ts',
            '**/jest.setup.ts',
        ],
    },
    {
        rules: {
            'no-console': 'off',
            'perfectionist/sort-objects': 'off',
            'yml/sort-keys': 'off',
        },
    },
    {
        ignores: [
            '**/dist/**',
            '**/node_modules/**',
            '**/coverage/**',
            'test/helper/veryBadFiles/**',
        ],
    },
);
