import type { Config } from 'tailwindcss';

/**
 * Tailwind CSS Configuration
 *
 * Integrates with the Asha design system tokens.
 * All values reference CSS custom properties from the design system.
 *
 * @see /src/lib/design-system/tokens/base.css
 */
export default {
	content: ['./src/**/*.svelte', './src/**/*.ts', './src/**/*.js', './src/**/*.mdx'],

	theme: {
		/* =========================================
		 * CORE THEME OVERRIDES
		 * ========================================= */

		// Breakpoints aligned with design system
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px'
		},

		extend: {
			/* =========================================
			 * COLORS
			 * Using RGB with alpha channel support
			 * ========================================= */
			colors: {
				// Semantic backgrounds
				bg: {
					DEFAULT: 'rgb(var(--ds-color-bg) / <alpha-value>)',
					subtle: 'rgb(var(--ds-color-bg-subtle) / <alpha-value>)',
					muted: 'rgb(var(--ds-color-bg-muted) / <alpha-value>)',
					elevated: 'rgb(var(--ds-color-bg-elevated) / <alpha-value>)',
					overlay: 'rgb(var(--ds-color-bg-overlay) / <alpha-value>)'
				},

				// Semantic foregrounds
				fg: {
					DEFAULT: 'rgb(var(--ds-color-fg) / <alpha-value>)',
					muted: 'rgb(var(--ds-color-fg-muted) / <alpha-value>)',
					subtle: 'rgb(var(--ds-color-fg-subtle) / <alpha-value>)',
					'on-accent': 'rgb(var(--ds-color-fg-on-accent) / <alpha-value>)',
					'on-dark': 'rgb(var(--ds-color-fg-on-dark) / <alpha-value>)'
				},

				// Surface colors
				surface: {
					DEFAULT: 'rgb(var(--ds-color-surface) / <alpha-value>)',
					raised: 'rgb(var(--ds-color-surface-raised) / <alpha-value>)',
					sunken: 'rgb(var(--ds-color-surface-sunken) / <alpha-value>)'
				},

				// Border colors
				border: {
					DEFAULT: 'rgb(var(--ds-color-border) / <alpha-value>)',
					subtle: 'rgb(var(--ds-color-border-subtle) / <alpha-value>)',
					strong: 'rgb(var(--ds-color-border-strong) / <alpha-value>)',
					focus: 'rgb(var(--ds-color-border-focus) / <alpha-value>)'
				},

				// Accent colors
				accent: {
					DEFAULT: 'rgb(var(--ds-color-accent) / <alpha-value>)',
					hover: 'rgb(var(--ds-color-accent-hover) / <alpha-value>)',
					active: 'rgb(var(--ds-color-accent-active) / <alpha-value>)',
					subtle: 'rgb(var(--ds-color-accent-subtle) / <alpha-value>)'
				},

				// Secondary accent
				secondary: {
					DEFAULT: 'rgb(var(--ds-color-secondary) / <alpha-value>)',
					hover: 'rgb(var(--ds-color-secondary-hover) / <alpha-value>)',
					active: 'rgb(var(--ds-color-secondary-active) / <alpha-value>)',
					subtle: 'rgb(var(--ds-color-secondary-subtle) / <alpha-value>)'
				},

				// State colors
				success: {
					DEFAULT: 'rgb(var(--ds-color-success) / <alpha-value>)',
					subtle: 'rgb(var(--ds-color-success-subtle) / <alpha-value>)'
				},
				warning: {
					DEFAULT: 'rgb(var(--ds-color-warning) / <alpha-value>)',
					subtle: 'rgb(var(--ds-color-warning-subtle) / <alpha-value>)'
				},
				error: {
					DEFAULT: 'rgb(var(--ds-color-error) / <alpha-value>)',
					subtle: 'rgb(var(--ds-color-error-subtle) / <alpha-value>)'
				},
				info: {
					DEFAULT: 'rgb(var(--ds-color-info) / <alpha-value>)',
					subtle: 'rgb(var(--ds-color-info-subtle) / <alpha-value>)'
				},

				// Legacy aliases for backward compatibility
				primary: 'rgb(var(--ds-color-accent) / <alpha-value>)',
				background: 'rgb(var(--ds-color-bg) / <alpha-value>)',
				text: 'rgb(var(--ds-color-fg) / <alpha-value>)'
			},

			/* =========================================
			 * TYPOGRAPHY
			 * ========================================= */
			fontFamily: {
				sans: [
					'var(--ds-font-sans)',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'Roboto',
					'Helvetica Neue',
					'Arial',
					'sans-serif'
				],
				mono: ['var(--ds-font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace']
			},

			fontSize: {
				xs: ['var(--ds-font-size-xs)', { lineHeight: 'var(--ds-leading-normal)' }],
				sm: ['var(--ds-font-size-sm)', { lineHeight: 'var(--ds-leading-normal)' }],
				base: ['var(--ds-font-size-base)', { lineHeight: 'var(--ds-leading-normal)' }],
				lg: ['var(--ds-font-size-lg)', { lineHeight: 'var(--ds-leading-normal)' }],
				xl: ['var(--ds-font-size-xl)', { lineHeight: 'var(--ds-leading-snug)' }],
				'2xl': ['var(--ds-font-size-2xl)', { lineHeight: 'var(--ds-leading-snug)' }],
				'3xl': ['var(--ds-font-size-3xl)', { lineHeight: 'var(--ds-leading-tight)' }],
				'4xl': ['var(--ds-font-size-4xl)', { lineHeight: 'var(--ds-leading-tight)' }],
				'5xl': ['var(--ds-font-size-5xl)', { lineHeight: 'var(--ds-leading-none)' }],
				'6xl': ['var(--ds-font-size-6xl)', { lineHeight: 'var(--ds-leading-none)' }]
			},

			fontWeight: {
				normal: 'var(--ds-font-weight-normal)',
				medium: 'var(--ds-font-weight-medium)',
				semibold: 'var(--ds-font-weight-semibold)',
				bold: 'var(--ds-font-weight-bold)'
			},

			lineHeight: {
				none: 'var(--ds-leading-none)',
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
				wider: 'var(--ds-tracking-wider)',
				widest: 'var(--ds-tracking-widest)'
			},

			/* =========================================
			 * SPACING
			 * ========================================= */
			spacing: {
				'0': 'var(--ds-space-0)',
				'1': 'var(--ds-space-1)',
				'2': 'var(--ds-space-2)',
				'3': 'var(--ds-space-3)',
				'4': 'var(--ds-space-4)',
				'5': 'var(--ds-space-5)',
				'6': 'var(--ds-space-6)',
				'7': 'var(--ds-space-7)',
				'8': 'var(--ds-space-8)',
				'9': 'var(--ds-space-9)',
				'10': 'var(--ds-space-10)',
				'11': 'var(--ds-space-11)',
				'12': 'var(--ds-space-12)',
				'14': 'var(--ds-space-14)',
				'16': 'var(--ds-space-16)',
				'20': 'var(--ds-space-20)',
				'24': 'var(--ds-space-24)',
				'32': 'var(--ds-space-32)',
				gutter: 'var(--ds-gutter)',
				touch: 'var(--ds-touch-target-min)'
			},

			maxWidth: {
				'container-sm': 'var(--ds-container-sm)',
				'container-md': 'var(--ds-container-md)',
				'container-lg': 'var(--ds-container-lg)',
				'container-xl': 'var(--ds-container-xl)',
				'container-2xl': 'var(--ds-container-2xl)'
			},

			minWidth: {
				touch: 'var(--ds-touch-target-min)'
			},

			minHeight: {
				touch: 'var(--ds-touch-target-min)'
			},

			/* =========================================
			 * BORDER RADIUS
			 * ========================================= */
			borderRadius: {
				none: 'var(--ds-radius-none)',
				sm: 'var(--ds-radius-sm)',
				DEFAULT: 'var(--ds-radius-sm)',
				md: 'var(--ds-radius-md)',
				lg: 'var(--ds-radius-lg)',
				xl: 'var(--ds-radius-xl)',
				'2xl': 'var(--ds-radius-2xl)',
				full: 'var(--ds-radius-full)'
			},

			/* =========================================
			 * SHADOWS
			 * ========================================= */
			boxShadow: {
				none: 'var(--ds-shadow-none)',
				xs: 'var(--ds-shadow-xs)',
				sm: 'var(--ds-shadow-sm)',
				DEFAULT: 'var(--ds-shadow-md)',
				md: 'var(--ds-shadow-md)',
				lg: 'var(--ds-shadow-lg)',
				xl: 'var(--ds-shadow-xl)',
				'2xl': 'var(--ds-shadow-2xl)',
				elevated: 'var(--ds-shadow-elevated)',
				overlay: 'var(--ds-shadow-overlay)'
			},

			/* =========================================
			 * Z-INDEX
			 * ========================================= */
			zIndex: {
				base: 'var(--ds-z-base)',
				dropdown: 'var(--ds-z-dropdown)',
				sticky: 'var(--ds-z-sticky)',
				fixed: 'var(--ds-z-fixed)',
				overlay: 'var(--ds-z-overlay)',
				modal: 'var(--ds-z-modal)',
				popover: 'var(--ds-z-popover)',
				tooltip: 'var(--ds-z-tooltip)',
				toast: 'var(--ds-z-toast)'
			},

			/* =========================================
			 * OPACITY
			 * ========================================= */
			opacity: {
				disabled: 'var(--ds-opacity-disabled)',
				placeholder: 'var(--ds-opacity-placeholder)',
				muted: 'var(--ds-opacity-muted)',
				hover: 'var(--ds-opacity-hover)',
				pressed: 'var(--ds-opacity-pressed)',
				overlay: 'var(--ds-opacity-overlay)'
			},

			/* =========================================
			 * BORDERS
			 * ========================================= */
			borderWidth: {
				DEFAULT: 'var(--ds-border-width-thin)',
				'0': 'var(--ds-border-width-none)',
				'2': 'var(--ds-border-width-medium)',
				'4': 'var(--ds-border-width-thick)'
			},

			/* =========================================
			 * TRANSITIONS
			 * ========================================= */
			transitionDuration: {
				instant: 'var(--ds-duration-instant)',
				fast: 'var(--ds-duration-fast)',
				DEFAULT: 'var(--ds-duration-normal)',
				normal: 'var(--ds-duration-normal)',
				slow: 'var(--ds-duration-slow)',
				slower: 'var(--ds-duration-slower)'
			},

			transitionTimingFunction: {
				linear: 'var(--ds-ease-linear)',
				in: 'var(--ds-ease-in)',
				out: 'var(--ds-ease-out)',
				'in-out': 'var(--ds-ease-in-out)',
				standard: 'var(--ds-ease-standard)',
				spring: 'var(--ds-ease-spring)'
			},

			/* =========================================
			 * RING (FOCUS)
			 * ========================================= */
			ringWidth: {
				DEFAULT: 'var(--ds-ring-width)'
			},

			ringOffsetWidth: {
				DEFAULT: 'var(--ds-ring-offset)'
			},

			ringColor: {
				DEFAULT: 'var(--ds-ring-color)'
			},

			/* =========================================
			 * ANIMATIONS
			 * ========================================= */
			animation: {
				'fade-in': 'fadeIn var(--ds-duration-normal) var(--ds-ease-standard)',
				'fade-out': 'fadeOut var(--ds-duration-normal) var(--ds-ease-standard)',
				'slide-up': 'slideUp var(--ds-duration-normal) var(--ds-ease-standard)',
				'slide-down': 'slideDown var(--ds-duration-normal) var(--ds-ease-standard)',
				'scale-in': 'scaleIn var(--ds-duration-normal) var(--ds-ease-spring)',
				'spin-slow': 'spin 2s linear infinite'
			},

			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				fadeOut: {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' }
				},
				slideUp: {
					'0%': { opacity: '0', transform: 'translateY(8px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				slideDown: {
					'0%': { opacity: '0', transform: 'translateY(-8px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				scaleIn: {
					'0%': { opacity: '0', transform: 'scale(0.95)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				}
			}
		}
	},

	plugins: []
} satisfies Config;
