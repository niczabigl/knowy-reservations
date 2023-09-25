module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module",
        "extraFileExtensions": ['.html']
    },
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@angular-eslint/recommended"
    ],
    "plugins": [
        "@angular-eslint/eslint-plugin",
        "@angular-eslint/eslint-plugin-template",
        "@typescript-eslint",
        "@typescript-eslint/eslint-plugin"
    ],
    "root": true,
    "rules": {
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/unbound-method": "off",
        "@typescript-eslint/no-misused-promises": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "@angular-eslint/component-selector": [
            "error",
            {
                "type": "element",
                "prefix": "app",
                "style": "kebab-case"
            }
        ],
        "@angular-eslint/directive-selector": [
            "error",
            {
                "type": "attribute",
                "prefix": "app",
                "style": "camelCase"
            }
        ],
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/array-type": "off",
        "@typescript-eslint/ban-types": [
            "error",
            {
                "types": {
                    "Object": {
                        "message": "Avoid using the `Object` type. Did you mean `object`?"
                    },
                    "Function": {
                        "message": "Avoid using the `Function` type. Prefer a specific function type, like `() => void`."
                    },
                    "Boolean": {
                        "message": "Avoid using the `Boolean` type. Did you mean `boolean`?"
                    },
                    "Number": {
                        "message": "Avoid using the `Number` type. Did you mean `number`?"
                    },
                    "String": {
                        "message": "Avoid using the `String` type. Did you mean `string`?"
                    },
                    "Symbol": {
                        "message": "Avoid using the `Symbol` type. Did you mean `symbol`?"
                    }
                }
            }
        ],
        "@typescript-eslint/consistent-type-assertions": "error",
        "@typescript-eslint/indent": [
            "error",
            4,
            {
                "FunctionDeclaration": {
                    "parameters": "first"
                },
                "FunctionExpression": {
                    "parameters": "first"
                }
            }
        ],
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                "multiline": {
                    "delimiter": "semi",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": false
                }
            }
        ],
        "@typescript-eslint/member-ordering": "error",
        "@typescript-eslint/naming-convention": [
            "error",
            {
                "selector": "variable",
                "format": [
                    "camelCase",
                    "UPPER_CASE",
                    "PascalCase"
                ],
                "leadingUnderscore": "forbid",
                "trailingUnderscore": "forbid"
            }
        ],
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-empty-interface": "error",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-inferrable-types": [
            "error",
            {
                "ignoreParameters": true
            }
        ],
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-namespace": "error",
        "@typescript-eslint/no-non-null-assertion": "error",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/no-shadow": [
            "error",
            {
                "hoist": "all"
            }
        ],
        "@typescript-eslint/no-unused-expressions": "error",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/quotes": [
            "error",
            "single"
        ],
        "@typescript-eslint/semi": [
            "error",
            "always"
        ],
        "@typescript-eslint/triple-slash-reference": [
            "error",
            {
                "path": "always",
                "types": "prefer-import",
                "lib": "always"
            }
        ],
        "@typescript-eslint/type-annotation-spacing": "error",
        "@typescript-eslint/typedef": "error",
        "@typescript-eslint/unified-signatures": "error",
        "arrow-body-style": "error",
        "complexity": "off",
        "constructor-super": "error",
        "curly": "error",
        "dot-notation": "off",
        "eol-last": "error",
        "eqeqeq": [
            "error",
            "smart"
        ],
        "guard-for-in": "error",
        "id-denylist": [
            "error",
            "any",
            "Number",
            "number",
            "String",
            "string",
            "Boolean",
            "boolean",
            "Undefined",
            "undefined"
        ],
        "id-match": "error",
        "indent": "off",
        "max-classes-per-file": "off",
        "max-len": [
            "error",
            {
                "code": 160
            }
        ],
        "new-parens": "error",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-cond-assign": "error",
        "no-console": [
            "error",
            {
                "allow": [
                    "log",
                    "warn",
                    "dir",
                    "timeLog",
                    "assert",
                    "clear",
                    "count",
                    "countReset",
                    "group",
                    "groupEnd",
                    "table",
                    "dirxml",
                    "error",
                    "groupCollapsed",
                    "Console",
                    "profile",
                    "profileEnd",
                    "timeStamp",
                    "context"
                ]
            }
        ],
        "no-debugger": "error",
        "no-empty": "off",
        "no-empty-function": "off",
        "no-eval": "error",
        "no-fallthrough": "error",
        "no-invalid-this": "off",
        "no-new-wrappers": "error",
        "no-restricted-imports": [
            "error",
            "rxjs/Rx"
        ],
        "no-shadow": "off",
        "no-throw-literal": "error",
        "no-trailing-spaces": "error",
        "no-undef-init": "error",
        "no-underscore-dangle": "error",
        "no-unsafe-finally": "error",
        "no-unused-expressions": "off",
        "no-unused-labels": "error",
        "no-use-before-define": "off",
        "no-var": "error",
        "object-shorthand": "error",
        "one-var": [
            "error",
            "never"
        ],
        "prefer-const": "error",
        "quote-props": [
            "error",
            "as-needed"
        ],
        "quotes": "off",
        "radix": "error",
        "semi": "off",
        "space-before-function-paren": [
            "error",
            {
                "anonymous": "never",
                "asyncArrow": "always",
                "named": "never"
            }
        ],
        "spaced-comment": [
            "error",
            "always",
            {
                "markers": [
                    "/"
                ]
            }
        ],
        "use-isnan": "error",
        "valid-typeof": "off",
    }
};
