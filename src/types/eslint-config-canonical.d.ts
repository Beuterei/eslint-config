// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="eslint" />

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
type CanonicalRecommended = import('eslint').Linter.Config;

declare module 'eslint-config-canonical/configurations/browser.js' {
    const recommended: CanonicalRecommended;
    export { recommended };
}

declare module 'eslint-config-canonical/configurations/canonical.js' {
    const recommended: CanonicalRecommended;
    export { recommended };
}

declare module 'eslint-config-canonical/configurations/cypress.js' {
    const recommended: CanonicalRecommended;
    export { recommended };
}

declare module 'eslint-config-canonical/configurations/jest.js' {
    const recommended: CanonicalRecommended;
    export { recommended };
}

declare module 'eslint-config-canonical/configurations/jsdoc.js' {
    const recommended: CanonicalRecommended;
    export { recommended };
}

declare module 'eslint-config-canonical/configurations/json.js' {
    const recommended: CanonicalRecommended;
    export { recommended };
}

declare module 'eslint-config-canonical/configurations/jsx-a11y.js' {
    const recommended: CanonicalRecommended;
    export { recommended };
}

declare module 'eslint-config-canonical/configurations/module.js' {
    const recommended: CanonicalRecommended;
    export { recommended };
}

declare module 'eslint-config-canonical/configurations/node.js' {
    const recommended: CanonicalRecommended;
    export { recommended };
}

declare module 'eslint-config-canonical/configurations/prettier.js' {
    const recommended: CanonicalRecommended;
    export { recommended };
}

declare module 'eslint-config-canonical/configurations/react.js' {
    const recommended: CanonicalRecommended;
    export { recommended };
}

declare module 'eslint-config-canonical/configurations/regexp.js' {
    const recommended: CanonicalRecommended;
    export { recommended };
}

declare module 'eslint-config-canonical/configurations/typescript.js' {
    const recommended: CanonicalRecommended;
    export { recommended };
}

declare module 'eslint-config-canonical/configurations/typescript-type-checking.js' {
    const recommended: CanonicalRecommended;
    export { recommended };
}

declare module 'eslint-config-canonical/configurations/vitest.js' {
    const recommended: CanonicalRecommended;
    export { recommended };
}

declare module 'eslint-config-canonical/configurations/yaml.js' {
    const recommended: CanonicalRecommended;
    export { recommended };
}

declare module 'eslint-config-canonical/configurations/zod.js' {
    const recommended: CanonicalRecommended;
    export { recommended };
}
