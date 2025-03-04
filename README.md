[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <img src="https://d33wubrfki0l68.cloudfront.net/204482ca413433c80cd14fe369e2181dd97a2a40/092e2/assets/img/logo.svg" alt="Logo" height="60">

  <h3 align="center">eslint-config</h3>

  <p align="center">
    Shared eslint config
    <br />
    <br />
    ·
    <a href="https://github.com/Beuterei/eslint-config/issues">Report Bug</a>
    ·
    <a href="https://github.com/Beuterei/eslint-config/issues">Request Feature</a>
    ·
  </p>
</p>

- [About The Project](#about-the-project)
    - [Installation](#installation)
- [Supported primitives configs](#supported-primitives-configs)
    - [What are primitives?](#what-are-primitives)
- [Supported configs](#supported-configs)
- [Usage](#usage)
    - [Cache](#cache)
    - [Configs](#configs)
    - [Browser](#browser)
    - [Cypress](#cypress)
    - [Jest with TypeScript](#jest-with-typescript)
    - [Jest](#jest)
    - [Modules](#modules)
    - [Node](#node)
    - [Vitest](#vitest)
    - [Zod](#zod)
- [VSCode](#vscode)
    - [Autofix on save](#autofix-on-save)
    - [EditorConfig](#editorconfig)
- [Custom configs using primitives](#custom-configs-using-primitives)
- [Usage without typescript-eslint](#usage-without-typescript-eslint)
- [`typescript` config vs. `typescript-no-type-checking` config](#typescript-config-vs-typescript-no-type-checking-config)
- [Migration to 3.0.0](#migration-to-300)
- [Migration from other linter setups](#migration-from-other-linter-setups)
- [Prettier](#prettier)
- [Development](#development)
    - [Structure](#structure)
    - [Rule values](#rule-values)
    - [Testing philosophy](#testing-philosophy)
        - [Verbose logging](#verbose-logging)
    - [Tips and tricks](#tips-and-tricks)

<!-- ABOUT THE PROJECT -->

## About The Project

Shared eslint config for my projects. Utilizing [ESLint](https://eslint.org/).

### Installation

```bash
npm i -D eslint@9 @beuluis/eslint-config typescript-eslint
```

typescript-eslint is not required but recommended. See [Usage without typescript-eslint](#usage-without-typescript-eslint)

## Supported primitives configs

- [base](src/configurations/primitives/base.ts) - The code style guide base. Needs to be loaded and loaded first.
- [jsdoc](src/configurations/primitives/jsdoc.ts) - For projects using [JSDoc](https://jsdoc.app/)
- [json](src/configurations/primitives/json.ts) - For projects using [JSON](https://www.json.org/)
- [prettier](src/configurations/primitives/prettier.ts) - Applies [Prettier](https://prettier.io/) formatting
- [react](src/configurations/primitives/react.ts) - For projects using [React](https://reactjs.org/)
- [regexp](src/configurations/primitives/regexp.ts) - For projects that use regular expressions.
- [typescript](src/configurations/primitives/typescript.ts) - For projects using [TypeScript](https://www.typescriptlang.org/)
- [typescript-no-type-checking](src/configurations/primitives/typescript-no-type-checking.ts) - For projects using [TypeScript](https://www.typescriptlang.org/) and don't want additional rules that require type information (rules using type information take longer to run)
- [yaml](src/configurations/primitives/yaml.ts) - For projects using [YAML](https://yaml.org/)

### What are primitives?

Primitives are the basis for most language support. They match the file patterns and apply the rules for the respective language. As example the `typescript` primitive will apply rules only to `.ts` files and not to `.js` files.

## Supported configs

- [browser](src/configurations/browser.ts) - For projects that use DOM and other browser APIs.
- [cypress](src/configurations/cypress.ts) - For projects that use [Cypress](https://www.cypress.io/)
- [jest](src/configurations/jest.ts) - For projects using [Jest](https://jestjs.io/)
- [jestTs](src/configurations/jestTs.ts) - For projects using [Jest](https://jestjs.io/) with TypeScript
- [module](src/configurations/module.ts) - For projects that use ESM modules.
- [node](src/configurations/node.ts) - For projects using [node.js](https://nodejs.org/en/)
- [vitest](src/configurations/vitest.ts) - For projects using [Vitest](https://vitest.dev/)
- [zod](src/configurations/zod.ts) - For projects using [Zod](https://github.com/colinhacks/zod)

## Usage

For most projects the configuration can be automatched using the [auto](src/configurations/auto.ts) config. This can be archived with matching the file patterns of the primitives (See [What are primitives?](#what-are-primitives)).
This includes the following configs:

- base
- typescript
- regexp
- react
- jsdoc
- json
- yaml
- prettier

Create a `eslint.config.mjs` (or `.ts` see [TypeScript Configuration Files](https://eslint.org/docs/latest/use/configure/configuration-files#typescript-configuration-files)) file with the following content:

```js
// @ts-check

import { config } from "typescript-eslint";

import { auto } from "@beuluis/eslint-config";

export default config(auto, {
    // For global ignores don't define other keys here. Adapt as needed.
    ignores: ["**/dist/**", "**/node_modules/**"],
});
```

Adapt the ignore patterns as needed based on [eslint ignore](https://eslint.org/docs/latest/use/configure/ignore).

### Cache

Utilizing the cache is highly recommended.

See [eslint cache](https://eslint.org/docs/latest/use/command-line-interface#--cache)

### Configs

Loading configs only for matching configs is important since it improves performance and ensures the correct rules are applied.

See [config(...)](https://typescript-eslint.io/packages/typescript-eslint/#config)

> :warning: **Since for other tooling the structure of your project is not assumed. It is necessary to configure the glob patterns according to your project structure. The provided examples are only for reference.**

### Browser

```js
// @ts-check

import { config } from "typescript-eslint";

import { auto, browser } from "@beuluis/eslint-config";

export default config(
    auto,
    {
        files: ["*.{js,mjs,cjs,jsx,tsx,ts}"],
        extends: browser,
    },
    {
        // For global ignores don't define other keys here. Adapt as needed.
        ignores: ["**/dist/**", "**/node_modules/**"],
    },
);
```

### Cypress

```js
// @ts-check

import { config } from "typescript-eslint";

import { auto, cypress } from "@beuluis/eslint-config";

export default config(
    auto,
    {
        files: ["**/cypress/**/*.{js,ts,jsx,tsx}", "**/cypress.config.{js,ts}"],
        extends: cypress,
    },
    {
        // For global ignores don't define other keys here. Adapt as needed.
        ignores: ["**/dist/**", "**/node_modules/**"],
    },
);
```

### Jest with TypeScript

Since some rules differ between jest and jest with typescript I have a dedicated config for it.

```js
// @ts-check

import { config } from "typescript-eslint";

import { auto, jestTs } from "@beuluis/eslint-config";

export default config(
    auto,
    {
        files: [
            "**/*.?(component-){spec,test}.{ts,tsx}",
            "**/{__mocks__,__tests__}/**/*.{ts,tsx}",
            "**/jest.setup.{ts}",
        ],
        extends: jestTs,
    },
    {
        // For global ignores don't define other keys here. Adapt as needed.
        ignores: ["**/dist/**", "**/node_modules/**", "**/coverage/**"],
    },
);
```

### Jest

```js
// @ts-check

import { config } from "typescript-eslint";

import { auto, jest } from "@beuluis/eslint-config";

export default config(
    auto,
    {
        files: [
            "**/*.?(component-){spec,test}.{js,mjs,cjs,jsx}",
            "**/{__mocks__,__tests__}/**/*.{js,mjs,cjs,jsx}",
            "**/jest.setup.{js,mjs,cjs}",
        ],
        extends: jest,
    },
    {
        // For global ignores don't define other keys here. Adapt as needed.
        ignores: ["**/dist/**", "**/node_modules/**", "**/coverage/**"],
    },
);
```

### Modules

```js
// @ts-check

import { config } from "typescript-eslint";

import { auto, module } from "@beuluis/eslint-config";

export default config(
    auto,
    {
        files: ["**/*.{mjs,js}"],
        extends: module,
    },
    {
        // For global ignores don't define other keys here. Adapt as needed.
        ignores: ["**/dist/**", "**/node_modules/**"],
    },
);
```

### Node

```js
// @ts-check

import { config } from "typescript-eslint";

import { auto, node } from "@beuluis/eslint-config";

export default config(
    auto,
    {
        files: ["**/*.{js,mjs,cjs}"],
        extends: node,
    },
    {
        // For global ignores don't define other keys here. Adapt as needed.
        ignores: ["**/dist/**", "**/node_modules/**"],
    },
);
```

### Vitest

```js
// @ts-check

import { config } from "typescript-eslint";

import { auto, vitest } from "@beuluis/eslint-config";

export default config(
    auto,
    {
        files: [
            "**/*.?(component-){spec,test}.{js,mjs,cjs,jsx}",
            "**/{__mocks__,__tests__}/**/*.{js,mjs,cjs,jsx}",
            "**/vitest.config.{js,mjs,cjs}",
        ],
        extends: vitest,
    },
    {
        // For global ignores don't define other keys here. Adapt as needed.
        ignores: ["**/dist/**", "**/node_modules/**"],
    },
);
```

### Zod

```js
// @ts-check

import { config } from "typescript-eslint";

import { auto, zod } from "@beuluis/eslint-config";

export default config(
    auto,
    {
        files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
        extends: zod,
    },
    {
        // For global ignores don't define other keys here. Adapt as needed.
        ignores: ["**/dist/**", "**/node_modules/**"],
    },
);
```

## VSCode

Needs the official [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

Add the following to your `.vscode/settings.json` in your repository root (Alternatively you can add it to your global settings. Keep in mind this can have side effects). See [VSCode settings](https://code.visualstudio.com/docs/editor/settings):

```json
{
    "eslint.useFlatConfig": true,
    // Adapt this to your needs
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "json",
        "typescript",
        "typescriptreact",
        "yaml"
    ],
    // Only needed for TS and not really related to eslint but one of the main problems I encountered. VSCode otherwise will use its build in typescript language server which may differ from the one you use in your project. This will result in false positives and false negatives.
    "typescript.tsdk": "node_modules/typescript/lib"
}
```

### Autofix on save

Needs the official [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

Add this to your `settings.json` in vscode.

```json
{
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    // This could cause problems so try it out if you want but no guarantee.
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    "editor.formatOnSave": true
}
```

### EditorConfig

Here is a EditorConfig to be used alongside this eslint config.

```test
root = true

[*]
indent_style = space
indent_size = 4
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = false
insert_final_newline = false

[*.{json,json5,jsonc,yml,yaml}]
indent_size = 2
```

## Custom configs using primitives

If you do not want to use the auto config you can import all needed configs manually from the [primitives](src/primitives.ts) export.

Keep in mind that the base config needs to be loaded and loaded first and ending with the prettier config.

Keep in mind that this is basically the wild west of config dependencies and definitions. You can peak into the [configurations](configurations) folder to see how it works. Good luck cowboy!

```js
// @ts-check

import { config } from "typescript-eslint";

import { base, yaml, prettier } from "@beuluis/eslint-config";

export default config(base, yaml, prettier);
```

## Usage without typescript-eslint

> :warning: **The name may suggest it is only for TS but it can be used for JS as well**

The usage of typescript-eslint is optional. You can use the eslint config without it.

But it offers a create set of utils to make your life a bit easier for merging configs and type safety.

If you do not want to use it please see [apply config array](https://eslint.org/docs/latest/use/configure/combine-configs#apply-a-config-array)

## `typescript` config vs. `typescript-no-type-checking` config

I decided to do a opt out approach in favor of type safety. The `typescript` config extends the `typescript-no-type-checking` config with some more rules that need deeper type checking. In general this is a good thing thats why it is enabled in the default `typescript` config but for some larger projects or projects with complex types this can be a performance issue.
If you experience such performance issues you have two points to consider:

- Refactor your complex types. Most of the time when ESlint has trouble this is a hint that your types may not be well structure or can be optimized.
- Turn off this feature by using the `typescript-no-type-checking` config instead of the `typescript` config
- Alternatively, if you're using the `auto` config, you can use `autoNoTypeChecking` instead:

```js
// @ts-check

import { config } from "typescript-eslint";

import { autoNoTypeChecking } from "@beuluis/eslint-config";

export default config(autoNoTypeChecking, {
    // For global ignores don't define other keys here
    ignores: ["**/dist/**", "**/node_modules/**"],
});
```

## Migration to 3.0.0

This version is basically a rewrite of the whole thing. It supports eslint v9 which enforces so called flat configs.

But this also comes with way more flexibility and no worries the most heavy lifting is done in this package.

1. Run `npm i -D eslint@9 @beuluis/eslint-config@latest typescript-eslint`

2. Remove any old eslint configurations and ignore files. Those could be in `package.json` or in a separate config file.

3. Create a new config file on the root of your project as described in the [usage](#usage) section. Don't forget to add the global ignores back from the old ignore file.

4. Setup/Update the IDE integration.

5. Run ESlint and check the output. You can run it with `--fix` to autofix most of the issues (Please verify the fixes. During migrations you will often encounter false positives just because the pure size of a codebase).

6. Enjoy

## Migration from other linter setups

1. Remove all previous installed ESlint plugins and configs (This pack comes with all it needs). Keep only those not provides by this pack.

2. Run `npm i -D eslint@9 @beuluis/eslint-config typescript-eslint`

3. Use one of the [example configs](#Example-configurations) or build your own based on them

4. Run ESlint and check the output. You can run it with `--fix` to autofix most of the issues (Please verify the fixes. During migrations you will often encounter false positives just because teh pure size of a codebase).

5. Enjoy

## Prettier

Prettier is a great tool to provide common formatting for multiple file types across the codebase.
The problem is that prettier acts dynamic based on the `.prettierrc` config present in the project.

An example:

Prettier gets defined with an indent with 2 spaces in the `.prettierrc` file.

Now some eslint rule requires a indent of 4 spaces and now you have a conflict.

So this package ignores the `.prettierrc` file and uses the one defined in this package using [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier).

## Development

### Structure

I use the subfolder `configurations` to define the configurations.

```text
src
├── ...
├── configurations    # All configurations to be used
│ ├── primitives      # Primitive configurations that serve as building blocks
│ │ ├── base.ts       # Base configuration for all ESLint testing
│ │ └── {{name}}.ts   # Other primitive configurations
│ ├── {{name}}.ts     # Other specialized configurations (e.g. different testing libs etc)
│ └── ...
├── primitives.ts     # Primitive configuration export
├── index.ts          # Other configuration export
└── ...
```

Inside the files I try to keep this structure:

```ts
const rules = {
    first_all_rules_that_are_turned_off: "off",
    first_all_rules_that_are_configured_with_warn: "warn",
    first_all_rules_that_are_configured_with_error: "error",
};
```

### Rule values

Rules should use the string value instead of the number to ensure easy reading:

- `"off"` instead of `0`

- `"warn"` instead of `1`

- `"error"` instead of `2`

### Testing philosophy

Testing a eslint config is a bit tricky.

There were two main concerns I wanted to cover with the testing strategy:

1. The configs should be valid and be able to be loaded by eslint
2. I manually typed some configs from dependency and they could change structure with updates.

So I decided to actually try to initialize the configs with eslint lint a known bad file and see if I get the expected results.

#### Verbose logging

You can run the tests with `npm run test:verbose -- nest` to get verbose logging. This will log the results of the linting to the console.

### Tips and tricks

- One of the most confusing part is the override mechanism of eslint.

    Some useful info can be found in [config(...)](https://typescript-eslint.io/packages/typescript-eslint/#config) and [combine-configs](https://eslint.org/docs/latest/use/configure/combine-configs)

- You can use [lint-staged](https://www.npmjs.com/package/lint-staged) to run linting on staged files. This is faster than running it for the whole project. (Remember that if you change something that might affect the linting results, e.g. a change to the eslint configuration, you should run linting for the whole project. This catches errors before GitLab CI).

    Example:

    ```json
    {
        "lint-staged": {
            "*.{ts,tsx,yaml,yml,json}": ["eslint"] // Adapt to project needs
        }
    }
    ```

    And run it as git hook. For example with [husky](https://www.npmjs.com/package/husky) with `npx lint-staged --verbose`

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/Beuterei/eslint-config.svg?style=flat-square
[contributors-url]: https://github.com/Beuterei/eslint-config/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Beuterei/eslint-config.svg?style=flat-square
[forks-url]: https://github.com/Beuterei/eslint-config/network/members
[stars-shield]: https://img.shields.io/github/stars/Beuterei/eslint-config.svg?style=flat-square
[stars-url]: https://github.com/Beuterei/eslint-config/stargazers
[issues-shield]: https://img.shields.io/github/issues/Beuterei/eslint-config.svg?style=flat-square
[issues-url]: https://github.com/Beuterei/eslint-config/issues
[license-shield]: https://img.shields.io/github/license/Beuterei/eslint-config.svg?style=flat-square
