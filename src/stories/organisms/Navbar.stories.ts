import type { Meta, StoryObj } from '@storybook/sveltekit';
import Navbar from '$lib/components/organisms/Navbar.svelte';

/**
 * # Navbar
 *
 * A responsive navigation bar component with logo, links, and mobile menu support.
 * Adapts to different screen sizes with a collapsible hamburger menu on mobile.
 *
 * ## Features
 *
 * - **Responsive**: Desktop horizontal layout, mobile hamburger menu
 * - **Logo support**: Text, image, or combined logo
 * - **Customizable links**: Array of navigation items
 * - **Mobile menu**: Toggleable menu for small screens
 *
 * ## Accessibility
 *
 * - Semantic `<nav>` element with aria-label
 * - Mobile menu button has aria-expanded state
 * - Focus management when menu opens/closes
 * - Skip link support for keyboard navigation
 *
 * ## Usage
 *
 * ```svelte
 * <Navbar
 *   logo={{ title: 'Brand', imgUrl: '/logo.svg' }}
 *   navLinks={[
 *     { label: 'Home', href: '/' },
 *     { label: 'Products', href: '/products' }
 *   ]}
 * />
 * ```
 */
const meta = {
	title: 'Organisms/Navbar',
	component: Navbar,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component:
					'A responsive navigation bar with logo, navigation links, and mobile hamburger menu support.'
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		open: {
			control: 'boolean',
			description: 'Controls whether the mobile menu is open',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' }
			}
		},
		link: {
			control: 'text',
			description: 'URL for the logo/brand link (typically homepage)',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: '/' }
			}
		},
		logo: {
			control: 'object',
			description: 'Logo configuration object with title, image, and display options',
			table: {
				type: {
					summary:
						'{ title: string, subtitle?: string, imgUrl?: string, imgAlt?: string, showTitle?: boolean }'
				}
			}
		},
		navLinks: {
			control: 'object',
			description: 'Array of navigation link objects',
			table: {
				type: { summary: '{ label: string, href: string }[]' }
			}
		}
	}
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================
// Basic Stories
// ============================================

export const Default: Story = {
	args: {
		logo: {
			title: 'Brand',
			imgUrl: 'https://via.placeholder.com/120x40',
			imgAlt: 'Brand logo'
		},
		link: '/',
		open: false,
		navLinks: [
			{ label: 'Home', href: '/' },
			{ label: 'Products', href: '/products' },
			{ label: 'About', href: '/about' },
			{ label: 'Contact', href: '/contact' }
		]
	}
};

export const MenuOpen: Story = {
	args: {
		...Default.args,
		open: true
	},
	parameters: {
		docs: {
			description: {
				story: 'Mobile menu in its open state. On desktop, this has no visible effect.'
			}
		}
	}
};

// ============================================
// Logo Variations
// ============================================

export const WithImageLogo: Story = {
	args: {
		logo: {
			title: 'DJ FMK',
			subtitle: '',
			imgUrl: 'https://images.prismic.io/djfacemakerv2/2f3497b5-9e28-4359-8f03-cb8a71548c1e_fmk+transition+noir.png?auto=compress,format',
			imgAlt: 'DJ FMK logo',
			showTitle: false
		},
		open: false,
		navLinks: [
			{ label: 'Home', href: '/' },
			{ label: 'About', href: '/about' },
			{ label: 'Contact', href: '/contact' }
		]
	},
	parameters: {
		docs: {
			description: {
				story: 'Navbar with an image-only logo (title hidden).'
			}
		}
	}
};

export const TextOnlyLogo: Story = {
	args: {
		logo: {
			title: 'My Brand',
			showTitle: true
		},
		link: '/',
		open: false,
		navLinks: [
			{ label: 'Home', href: '/' },
			{ label: 'Services', href: '/services' },
			{ label: 'Contact', href: '/contact' }
		]
	},
	parameters: {
		docs: {
			description: {
				story: 'Navbar with text-only branding, no logo image.'
			}
		}
	}
};

export const LogoWithSubtitle: Story = {
	args: {
		logo: {
			title: 'Asha',
			subtitle: 'Design System',
			imgUrl: 'https://via.placeholder.com/40x40',
			imgAlt: 'Asha logo',
			showTitle: true
		},
		link: '/',
		open: false,
		navLinks: [
			{ label: 'Components', href: '/components' },
			{ label: 'Tokens', href: '/tokens' },
			{ label: 'Guidelines', href: '/guidelines' }
		]
	},
	parameters: {
		docs: {
			description: {
				story: 'Logo with both title and subtitle displayed alongside the image.'
			}
		}
	}
};

// ============================================
// Navigation Variations
// ============================================

export const MinimalLinks: Story = {
	args: {
		logo: {
			title: 'Simple',
			showTitle: true
		},
		link: '/',
		open: false,
		navLinks: [
			{ label: 'Home', href: '/' },
			{ label: 'About', href: '/about' }
		]
	},
	parameters: {
		docs: {
			description: {
				story: 'Navbar with minimal navigation links for simple sites.'
			}
		}
	}
};

export const ManyLinks: Story = {
	args: {
		logo: {
			title: 'Complex Site',
			imgUrl: 'https://via.placeholder.com/100x36',
			imgAlt: 'Site logo'
		},
		link: '/',
		open: false,
		navLinks: [
			{ label: 'Home', href: '/' },
			{ label: 'Products', href: '/products' },
			{ label: 'Solutions', href: '/solutions' },
			{ label: 'Pricing', href: '/pricing' },
			{ label: 'Resources', href: '/resources' },
			{ label: 'Blog', href: '/blog' },
			{ label: 'Contact', href: '/contact' }
		]
	},
	parameters: {
		docs: {
			description: {
				story: 'Navbar with many navigation links. Consider using dropdowns for complex navigation.'
			}
		}
	}
};

// ============================================
// Design Guidelines
// ============================================

/**
 * # Design Guidelines
 *
 * ## Usage
 * - Place the Navbar at the top of every page for consistent navigation.
 * - Use a clear, recognizable logo that links to the homepage.
 * - Limit primary navigation to 5-7 items; use dropdowns for more.
 *
 * ## Do's
 * - Ensure the navbar is sticky or fixed for easy access.
 * - Provide clear visual feedback for the current/active page.
 * - Test the mobile menu on various devices.
 *
 * ## Don'ts
 * - Don't overcrowd the navbar with too many items.
 * - Avoid using the navbar for secondary actions—use a footer instead.
 * - Don't hide critical navigation behind too many menu levels.
 */
export const Guidelines: Story = {
	tags: ['!dev'],
	args: {
		...Default.args
	}
};
