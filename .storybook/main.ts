import type { StorybookConfig } from '@storybook/svelte-vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: StorybookConfig = {
	stories: ['../src/stories/**/*.mdx', '../src/stories/**/*.stories.@(js|ts|svelte)'],
	addons: [
		'@storybook/addon-svelte-csf',
		'@chromatic-com/storybook',
		'@storybook/addon-docs',
		'@storybook/addon-a11y'
	],
	framework: {
		name: '@storybook/svelte-vite',
		options: {}
	},
	core: {
		builder: '@storybook/builder-vite'
	},
	async viteFinal(config) {
		config.plugins = config.plugins || [];
		config.plugins.push(tailwindcss());

		// Configure SvelteKit aliases for Storybook
		config.resolve = config.resolve || {};
		config.resolve.alias = {
			...config.resolve.alias,
			$lib: resolve(__dirname, '../src/lib'),
			'@': resolve(__dirname, '../src')
		};

		return config;
	}
};
export default config;
