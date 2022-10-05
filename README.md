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
    <a href="https://github.com/beuluis/eslint-config/issues">Report Bug</a>
    ·
    <a href="https://github.com/beuluis/eslint-config/issues">Request Feature</a>
    ·
  </p>
</p>

<!-- ABOUT THE PROJECT -->

## About The Project

Shared eslint config for my projects. Utilizing [ESLint](https://eslint.org/).

### Installation

```bash
npm i -D @beuluis/eslint-config
```

### Usage

1. Install ESlint

    ```bash
    npm i -D eslint
    ```

2. Create a `.eslintrc` file and pick one of the configs and paste it in.

    ```bash
    touch .eslintrc
    ```

3. Tweak the overrides to your used project structure. Also feel free to remove unused extends.

4. Install [@beuluis/prettier-config](https://www.npmjs.com/package/@beuluis/prettier-config)

> :warning: **Since this pack does not assume any particularly structure. It is necessary to configure the glob patterns according to your project structure.**

## Supported configs

-   [@beuluis/eslint-config](configurations/eslintrc.json) - The JSMDG code style guide
-   [@beuluis/eslint-config/i18next](configurations/i18next.json) - For projects that use [i18next](https://www.i18next.com/).
-   [@beuluis/eslint-config/browser](configurations/browser.json) - For projects that use DOM and other browser APIs.
-   [@beuluis/eslint-config/node](configurations/node.json) - For projects using [node.js](https://nodejs.org/en/)
-   [@beuluis/eslint-config/typescript](configurations/typescript.json) - For projects using [TypeScript](https://www.typescriptlang.org/)
-   [@beuluis/eslint-config/react](configurations/react.json) - For projects using [React](https://reactjs.org/)
-   [@beuluis/eslint-config/json](configurations/json.json) - For projects using [JSON](https://www.json.org/)
-   [@beuluis/eslint-config/yaml](configurations/yaml.json) - For projects using [YAML](https://yaml.org/)
-   [@beuluis/eslint-config/jest](configurations/jest.json) - For projects using [Jest](https://jestjs.io/)

### Configs

### JavaScript

```json
{
    "extends": ["@beuluis/eslint-config"],
    "root": true,
    "overrides": [
        {
            "extends": ["@beuluis/eslint-config/json"],
            "files": "*.json"
        },
        {
            "extends": ["@beuluis/eslint-config/yaml"],
            "files": "*.yaml"
        }
    ]
}
```

### JavaScript & Browser environment

```json
{
    "extends": ["@beuluis/eslint-config"],
    "root": true,
    "overrides": [
        {
            "extends": ["@beuluis/eslint-config/browser"],
            "files": "*.js"
        },
        {
            "extends": ["@beuluis/eslint-config/json"],
            "files": "*.json"
        },
        {
            "extends": ["@beuluis/eslint-config/yaml"],
            "files": "*.yaml"
        }
    ]
}
```

### Node

```json
{
    "extends": ["@beuluis/eslint-config"],
    "root": true,
    "overrides": [
        {
            "extends": ["@beuluis/eslint-config/node"],
            "files": "*.js"
        },
        {
            "extends": ["@beuluis/eslint-config/json"],
            "files": "*.json"
        },
        {
            "extends": ["@beuluis/eslint-config/yaml"],
            "files": "*.yaml"
        },
        {
            "extends": ["@beuluis/eslint-config/jest"],
            "files": ["*.{spec,test}.js", "**/{__mocks__,__tests__}/**/*.js", "**/jest.setup.js"]
        }
    ]
}
```

### TypeScript

```json
{
    "extends": ["@beuluis/eslint-config"],
    "root": true,
    "overrides": [
        {
            "extends": ["@beuluis/eslint-config/typescript"],
            "files": "*.ts",
            "parserOptions": {
                "project": "tsconfig.json"
            }
        },
        {
            "extends": ["@beuluis/eslint-config/json"],
            "files": "*.json"
        },
        {
            "extends": ["@beuluis/eslint-config/yaml"],
            "files": "*.yaml"
        },
        {
            "extends": ["@beuluis/eslint-config/jest"],
            "files": ["*.{spec,test}.ts", "**/{__mocks__,__tests__}/**/*.ts", "**/jest.setup.ts"]
        }
    ]
}
```

### TypeScript & Browser environment

```json
{
    "extends": ["@beuluis/eslint-config"],
    "root": true,
    "overrides": [
        {
            "extends": ["@beuluis/eslint-config/typescript", "@beuluis/eslint-config/browser"],
            "files": "*.ts",
            "parserOptions": {
                "project": "tsconfig.json"
            }
        },
        {
            "extends": ["@beuluis/eslint-config/json"],
            "files": "*.json"
        },
        {
            "extends": ["@beuluis/eslint-config/yaml"],
            "files": "*.yaml"
        },
        {
            "extends": ["@beuluis/eslint-config/jest"],
            "files": ["*.{spec,test}.ts", "**/{__mocks__,__tests__}/**/*.ts", "**/jest.setup.ts"]
        }
    ]
}
```

### React

```json
{
    "extends": ["@beuluis/eslint-config"],
    "root": true,
    "overrides": [
        {
            "extends": [
                "@beuluis/eslint-config/node",
                "@beuluis/eslint-config/browser",
                "@beuluis/eslint-config/i18next"
            ],
            "files": "*.{js,jsx}"
        },
        {
            "extends": ["@beuluis/eslint-config/react"],
            "files": "*.jsx"
        },
        {
            "extends": ["@beuluis/eslint-config/json"],
            "files": "*.json"
        },
        {
            "extends": ["@beuluis/eslint-config/yaml"],
            "files": "*.yaml"
        },
        {
            "extends": ["@beuluis/eslint-config/jest"],
            "files": ["*.{spec,test}.js", "**/{__mocks__,__tests__}/**/*.js", "**/jest.setup.js"]
        }
    ]
}
```

### React & TypeScript

```json
{
    "extends": ["@beuluis/eslint-config"],
    "root": true,
    "overrides": [
        {
            "extends": [
                "@beuluis/eslint-config/typescript",
                "@beuluis/eslint-config/browser",
                "@beuluis/eslint-config/i18next"
            ],
            "files": "*.{ts,tsx}",
            "parserOptions": {
                "project": "tsconfig.json"
            }
        },
        {
            "extends": ["@beuluis/eslint-config/react"],
            "files": "*.tsx"
        },
        {
            "extends": ["@beuluis/eslint-config/json"],
            "files": "*.json"
        },
        {
            "extends": ["@beuluis/eslint-config/yaml"],
            "files": "*.yaml"
        },
        {
            "extends": ["@beuluis/eslint-config/jest"],
            "files": [
                "*.{spec,test}.{ts,tsx}",
                "**/{__mocks__,__tests__}/**/*.{ts,tsx}",
                "**/jest.setup.ts"
            ]
        }
    ]
}
```

## Extend config

Your `.eslintrc` file can be extended and overridden as normal.

However, one point is worth mentioning. You don't need to install plugins already listed in the [dependencies](package.json). (See [Tips and tricks](#Tips-and-tricks) for more info)

This means you only need to install plugins or configs if they are not provided by this pack.

## Development

### Note on canonical/node

It is not used due to its usage of the outdated [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node) pack. See [this](https://github.com/mysticatea/eslint-plugin-node/issues/300) issue on GitHub.

It is replaced with [eslint-plugin-n](https://www.npmjs.com/package/eslint-plugin-n) instead.

### How it works

I make use of [@rushstack/eslint-patch/modern-module-resolution](https://www.npmjs.com/package/@rushstack/eslint-patch) to load all the packages defined in the `package.json`. In doing so the consuming package doesn't have to install them as peerDependency.

All the rules get separated into fitting configurations. They can be later used alongside the base one.

So if you have a new technology/lib/etc. That need extra rules like react or jest? -> create a new configuration in `configurations`.

### Prettier integration

In order to guarantee that [prettier formatting configurations](https://github.com/prettier/eslint-plugin-prettier#recommended-configuration) take priority over specific linting implementations, i load it last in each linting configuration. Some plugins also provide those configs like [plugin:yml/prettier](https://github.com/ota-meshi/eslint-plugin-yml) and [plugin:jsonc/prettier ](https://github.com/ota-meshi/eslint-plugin-jsonc)

### Structure

Configurations need to be reexported on root level to be found by ESlint.

I use the subfolder `configurations` to define the configurations as JSON and make use of the [eslintrc schema](https://json.schemastore.org/eslintrc) for validation.

```text
.
├── ...
├── configurations    # All configurations to be used
│ ├── eslintrc.json   # Base configuration. Should apply for all languages to be tested by eslint
│ ├── {{name}}.json   # Specialized configuration for languages, tools, libs, etc.
│ └── ...
├── eslintrc.js       # Base configuration export. Also loads https://www.npmjs.com/package/@rushstack/eslint-patch
├── {{name}}.js       # Specialized configuration export. Can also be used to log warnings for deprecation or throw errors for other infos about the used configuration.
└── ...
```

Inside the files I try to keep this structure:

```json
{
    "first_all_rules_that_are_turned_off": "off",
    "first_all_rules_that_are_configured_with_warn": "warn",
    "first_all_rules_that_are_configured_with_error": "error"
}
```

### Rule values

Rules should use the string value instead of the number to ensure easy reading:

-   `"off"` instead of `0`

-   `"warn"` instead of `1`

-   `"error"` instead of `2`

### Tips and tricks

-   You see a error like `'module' is not defined` or other node global variables missing?

    Add a `node` override for `.js` (often still needed in TS projects for config files or so):

    ```json
    {
        "overrides": [
            {
                "extends": ["@beuluis/eslint-config/node"],
                "files": ["*.js"]
            }
        ]
    }
    ```

-   One of the most confusing part is the override mechanism of eslint.

    Some useful links for that are [extending-configuration-files](https://eslint.org/docs/latest/user-guide/configuring/configuration-files#extending-configuration-files) and [how-do-overrides-work](https://eslint.org/docs/latest/user-guide/configuring/configuration-files#how-do-overrides-work)

-   Make sure to read the plugin documentations carefully. Most plugins recommended configs already enable all you need.

    Example: The [prettier recommended-configuration](https://github.com/prettier/eslint-plugin-prettier#recommended-configuration) already expand to

    ```json
    {
        "extends": ["prettier"],
        "plugins": ["prettier"],
        "rules": {
            "prettier/prettier": "error",
            "arrow-body-style": "off",
            "prefer-arrow-callback": "off"
        }
    }
    ```

    so no need to redefine it.

-   Same goes for extended configs.

    Example: [canonical](https://github.com/gajus/eslint-config-canonical/blob/master/configurations/eslintrc.js) already enables the `import` plugin. So no need to redefine it. You can just use it

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- CONTACT -->

## Contact

Luis Beu - me@luisbeu.de

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/beuluis/eslint-config.svg?style=flat-square
[contributors-url]: https://github.com/beuluis/eslint-config/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/beuluis/eslint-config.svg?style=flat-square
[forks-url]: https://github.com/beuluis/eslint-config/network/members
[stars-shield]: https://img.shields.io/github/stars/beuluis/eslint-config.svg?style=flat-square
[stars-url]: https://github.com/beuluis/eslint-config/stargazers
[issues-shield]: https://img.shields.io/github/issues/beuluis/eslint-config.svg?style=flat-square
[issues-url]: https://github.com/beuluis/eslint-config/issues
[license-shield]: https://img.shields.io/github/license/beuluis/eslint-config.svg?style=flat-square
