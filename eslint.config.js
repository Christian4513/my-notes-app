import { defineConfig } from 'eslint/config';

import pluginReact from "eslint-plugin-react";
import pluginImport from "eslint-plugin-import";
import globals from "globals";
import babelParser from "@babel/eslint-parser";

export default defineConfig([
  {
    ignores: ['eslint.config.js'], // 👈 Esto ignora este archivo
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        babelOptions: {
          presets: ["@babel/preset-react"],
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react: pluginReact,
      import: pluginImport,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        },
      },
    },
    rules: {
      "react/display-name": "off",
      "react/prop-types": "off",
      semi: ["error", "always"],
      "import/no-unresolved": "error",
      "import/named": "error",
      "import/default": "error",
      "import/namespace": "error",
    },
  },
]);
