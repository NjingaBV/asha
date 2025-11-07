import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.svelte', './src/**/*.ts', './src/**/*.js', './src/**/*.mdx'],
	theme: {
		extend: {
			colors: {
				primary: 'rgb(var(--ds-color-primary) / <alpha-value>)',
				background: 'rgb(var(--ds-color-bg) / <alpha-value>)',
				surface: 'rgb(var(--ds-color-surface) / <alpha-value>)',
				text: 'rgb(var(--ds-color-text) / <alpha-value>)'
			},
			borderRadius: {
				lg: 'var(--ds-radius-lg)',
				xl: 'var(--ds-radius-xl)',
				'2xl': 'var(--ds-radius-2xl)',
				full: '9999px'
			},
			fontFamily: {
				sans: ['var(--ds-font-sans)', 'system-ui', 'sans-serif']
			}
		}
	},
	plugins: []
} satisfies Config;
