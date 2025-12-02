import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.svelte', './src/**/*.ts', './src/**/*.js', './src/**/*.mdx'],
	theme: {
		extend: {
			/* Colors - Map CSS variables to Tailwind */
			colors: {
				bg: 'rgb(var(--ds-color-bg) / <alpha-value>)',
				surface: 'rgb(var(--ds-color-surface) / <alpha-value>)',
				border: 'rgb(var(--ds-color-border) / <alpha-value>)',
				text: 'rgb(var(--ds-color-text) / <alpha-value>)',
				'text-muted': 'rgb(var(--ds-color-text-muted) / <alpha-value>)',
				primary: 'rgb(var(--ds-color-primary) / <alpha-value>)',
				'primary-hover': 'rgb(var(--ds-color-primary-hover) / <alpha-value>)',
				accent: 'rgb(var(--ds-color-accent) / <alpha-value>)',
				'accent-hover': 'rgb(var(--ds-color-accent-hover) / <alpha-value>)',
				success: 'rgb(var(--ds-color-success) / <alpha-value>)',
				warning: 'rgb(var(--ds-color-warning) / <alpha-value>)',
				danger: 'rgb(var(--ds-color-danger) / <alpha-value>)',
				info: 'rgb(var(--ds-color-info) / <alpha-value>)'
			},

			/* Typography */
			fontFamily: {
				sans: 'var(--ds-font-sans)'
			},
			fontSize: {
				xs: 'var(--ds-text-xs)',
				sm: 'var(--ds-text-sm)',
				base: 'var(--ds-text-base)',
				lg: 'var(--ds-text-lg)',
				xl: 'var(--ds-text-xl)',
				'2xl': 'var(--ds-text-2xl)',
				'3xl': 'var(--ds-text-3xl)',
				'4xl': 'var(--ds-text-4xl)',
				'5xl': 'var(--ds-text-5xl)',
				'6xl': 'var(--ds-text-6xl)'
			},
			lineHeight: {
				tight: 'var(--ds-leading-tight)',
				snug: 'var(--ds-leading-snug)',
				normal: 'var(--ds-leading-normal)',
				relaxed: 'var(--ds-leading-relaxed)',
				loose: 'var(--ds-leading-loose)'
			},
			letterSpacing: {
				tighter: 'var(--ds-tracking-tighter)',
				tight: 'var(--ds-tracking-tight)',
				normal: 'var(--ds-tracking-normal)',
				wide: 'var(--ds-tracking-wide)',
				wider: 'var(--ds-tracking-wider)'
			},
			fontWeight: {
				light: 'var(--ds-font-light)',
				normal: 'var(--ds-font-normal)',
				medium: 'var(--ds-font-medium)',
				semibold: 'var(--ds-font-semibold)',
				bold: 'var(--ds-font-bold)'
			},

			/* Spacing - 4pt grid */
			spacing: {
				1: 'var(--ds-space-1)',
				2: 'var(--ds-space-2)',
				3: 'var(--ds-space-3)',
				4: 'var(--ds-space-4)',
				6: 'var(--ds-space-6)',
				8: 'var(--ds-space-8)',
				12: 'var(--ds-space-12)',
				16: 'var(--ds-space-16)',
				24: 'var(--ds-space-24)',
				32: 'var(--ds-space-32)'
			},

			/* Border Radius */
			borderRadius: {
				sm: 'var(--ds-radius-sm)',
				md: 'var(--ds-radius-md)',
				lg: 'var(--ds-radius-lg)',
				xl: 'var(--ds-radius-xl)',
				'2xl': 'var(--ds-radius-2xl)',
				full: 'var(--ds-radius-full)'
			},

			/* Shadows */
			boxShadow: {
				sm: 'var(--ds-shadow-sm)',
				md: 'var(--ds-shadow-md)',
				lg: 'var(--ds-shadow-lg)',
				xl: 'var(--ds-shadow-xl)',
				'2xl': 'var(--ds-shadow-2xl)'
			},

			/* Transitions */
			transitionTimingFunction: {
				standard: 'var(--ds-ease-standard)',
				in: 'var(--ds-ease-in)',
				out: 'var(--ds-ease-out)',
				'in-out': 'var(--ds-ease-in-out)'
			},
			transitionDuration: {
				1: 'var(--ds-duration-1)',
				2: 'var(--ds-duration-2)',
				3: 'var(--ds-duration-3)',
				4: 'var(--ds-duration-4)'
			},

			/* Z-Index */
			zIndex: {
				dropdown: 'var(--ds-z-dropdown)',
				sticky: 'var(--ds-z-sticky)',
				fixed: 'var(--ds-z-fixed)',
				'modal-backdrop': 'var(--ds-z-modal-backdrop)',
				modal: 'var(--ds-z-modal)',
				popover: 'var(--ds-z-popover)',
				tooltip: 'var(--ds-z-tooltip)'
			},

			/* Opacity */
			opacity: {
				disabled: 'var(--ds-opacity-disabled)',
				hover: 'var(--ds-opacity-hover)'
			},

			/* Container Max Widths */
			maxWidth: {
				sm: 'var(--ds-container-sm)',
				md: 'var(--ds-container-md)',
				lg: 'var(--ds-container-lg)',
				xl: 'var(--ds-container-xl)',
				'2xl': 'var(--ds-container-2xl)'
			}
		}
	},
	plugins: []
} satisfies Config;
