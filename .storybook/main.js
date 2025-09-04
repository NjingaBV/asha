export default {
	stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
	addons: [
		'@storybook/addon-docs',
		{
			name: '@storybook/addon-svelte-csf',
			options: {
				legacyTemplate: true
			}
		}
	],
	framework: {
		name: '@storybook/sveltekit',
		options: {}
	},
	docs: {
		autodocs: true
	}
};
