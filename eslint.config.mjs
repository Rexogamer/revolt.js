import path from "node:path";
import { fileURLToPath } from "node:url";

import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

import tsParser from "@typescript-eslint/parser";
import mobx from "eslint-plugin-mobx";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([globalIgnores(["**/build/"]), {
    extends: compat.extends("plugin:@typescript-eslint/recommended", "plugin:mobx/recommended"),

    plugins: {
        mobx,
    },

    languageOptions: {
        parser: tsParser,
    },

    rules: {
        radix: "off",
        "no-spaced-func": "off",
        "react/no-danger": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-non-null-assertion": "off",

        "@typescript-eslint/no-unused-vars": ["warn", {
            varsIgnorePattern: "^_",
        }],

        "no-unused-vars": ["warn", {
            varsIgnorePattern: "^_",
        }],

        "mobx/missing-make-observable": "off",
    },
}]);