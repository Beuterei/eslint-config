// eslint-disable-next-line canonical/filename-match-exported
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

const config = [
    {
        external: [/node_modules/u],
        input: 'src/index.ts',
        output: {
            dir: 'dist/esm',
            entryFileNames: '[name].mjs',
            format: 'esm',
            preserveModules: true,
            sourcemap: true,
        },
        plugins: [
            typescript({
                declaration: false,
                outDir: 'dist/esm',
                tsconfig: './tsconfig.build.json',
            }),
            resolve(),
        ],
    },
    {
        external: [/node_modules/u],
        input: 'src/index.ts',
        output: {
            dir: 'dist/cjs',
            entryFileNames: '[name].cjs',
            format: 'cjs',
            preserveModules: true,
            sourcemap: true,
        },
        plugins: [
            typescript({
                declaration: false,
                outDir: 'dist/cjs',
                tsconfig: './tsconfig.build.json',
            }),
            resolve(),
        ],
    },
];

export default config;
