// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="eslint" />

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
type CanonicalRecommended = import('eslint').Linter.Config;

declare module 'eslint-config-canonical/configurations/browser' {
    const recommended: CanonicalRecommended;
    export { recommended };
}

declare module 'eslint-config-canonical/configurations/canonical' {
    const recommended: CanonicalRecommended;
    export { recommended };
}

declare module 'eslint-config-canonical/configurations/cypress' {
    const recommended: CanonicalRecommended;
    export { recommended };
}

declare module 'eslint-config-canonical/configurations/jest' {
    const recommended: CanonicalRecommended;
    export { recommended };
}

declare module 'eslint-config-canonical/configurations/jsdoc' {
    const recommended: CanonicalRecommended;
    export { recommended };
}

declare module 'eslint-config-canonical/configurations/json' {
    const recommended: CanonicalRecommended;
    export { recommended };
}

declare module 'eslint-config-canonical/configurations/jsx-a11y' {
    const recommended: CanonicalRecommended;
    export { recommended };
}

declare module 'eslint-config-canonical/configurations/module' {
    const recommended: CanonicalRecommended;
    export { recommended };
}

declare module 'eslint-config-canonical/configurations/node' {
    const recommended: CanonicalRecommended;
    export { recommended };
}

declare module 'eslint-config-canonical/configurations/prettier' {
    const recommended: CanonicalRecommended;
    export { recommended };
}

declare module 'eslint-config-canonical/configurations/react' {
    const recommended: CanonicalRecommended;
    export { recommended };
}

declare module 'eslint-config-canonical/configurations/regexp' {
    const recommended: CanonicalRecommended;
    export { recommended };
}

declare module 'eslint-config-canonical/configurations/typescript' {
    const recommended: CanonicalRecommended;
    export { recommended };
}

declare module 'eslint-config-canonical/configurations/typescript-type-checking' {
    const recommended: CanonicalRecommended;
    export { recommended };
}

declare module 'eslint-config-canonical/configurations/vitest' {
    const recommended: CanonicalRecommended;
    export { recommended };
}

declare module 'eslint-config-canonical/configurations/yaml' {
    const recommended: CanonicalRecommended;
    export { recommended };
}

declare module 'eslint-config-canonical/configurations/zod' {
    const recommended: CanonicalRecommended;
    export { recommended };
}
