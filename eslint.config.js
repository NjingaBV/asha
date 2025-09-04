// ESLint v9 flat config
import js from '@eslint/js';
import globals from 'globals';
import storybook from 'eslint-plugin-storybook';
import svelte from 'eslint-plugin-svelte';
import svelteParser from 'svelte-eslint-parser';
import tseslint from 'typescript-eslint';
import tsParser from '@typescript-eslint/parser';

export default [
	// Ignore patterns (replaces .eslintignore)
	{
		ignores: ['node_modules/**', 'dist/**', '.svelte-kit/**', 'storybook-static/**']
	},

	// Global environments
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},

	// Base JS rules
	js.configs.recommended,

	// TypeScript rules
	...tseslint.configs.recommended,

	// Svelte rules (flat config)
	...svelte.configs['flat/recommended'],

	// Storybook rules (flat config)
	...storybook.configs['flat/recommended'],

	// Language options per file type
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parser: svelteParser,
			parserOptions: {
				// Use TS parser inside <script lang="ts">
				parser: tsParser,
				extraFileExtensions: ['.svelte'],
				ecmaVersion: 'latest',
				sourceType: 'module'
			}
		},
		rules: {
			// Assouplir quelques règles trop strictes pour ce codebase
			'svelte/require-each-key': 'off',
			'svelte/no-at-html-tags': 'off',
			'svelte/no-navigation-without-resolve': 'off',
			'svelte/no-immutable-reactive-statements': 'off'
		}
	},
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			parser: tsParser,
			ecmaVersion: 'latest',
			sourceType: 'module'
		}
	}
];
