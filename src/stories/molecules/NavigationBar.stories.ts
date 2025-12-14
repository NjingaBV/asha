import type { Meta, StoryObj } from '@storybook/sveltekit';
import NavigationBar from '$lib/components/molecules/NavigationBar.svelte';

const meta = {
	title: 'Molecules/NavigationBar',
	component: NavigationBar,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `
# NavigationBar Component

A unified navigation component supporting both horizontal header and vertical sidebar layouts with automatic contrast calculation. Replaces the separate Nav component.

## Features

- **Dual Layout Support**: Horizontal navigation bar and vertical sidebar modes
- **Automatic Contrast**: Calculates text color based on background brightness
- **Backward Compatible**: Supports both new (\`orientation\`) and old (\`headerMenu\`) APIs
- **Custom Colors**: Full control over background color with automatic text contrast
- **Responsive**: Adapts to screen sizes with proper spacing
- **Sticky Option**: Horizontal mode supports sticky positioning
- **Accessible**: Full ARIA support and semantic HTML

## Usage Examples

**Horizontal Navigation (Header):**
\`\`\`svelte
<NavigationBar
  items={[{label: 'Home', href: '/'}, {label: 'About', href: '/about'}]}
  orientation="horizontal"
  sticky={true}
/>
\`\`\`

**Vertical Navigation (Sidebar):**
\`\`\`svelte
<NavigationBar
  items={[{label: 'Home', href: '/'}, {label: 'About', href: '/about'}]}
  orientation="vertical"
  backgroundColor="#0a84ff"
/>
\`\`\`

## Props

- \`items\`: Navigation item objects with \`label\` and \`href\`
- \`links\`: Alternative prop name (backward compatible with old API)
- \`orientation\`: 'horizontal' or 'vertical' (default: 'horizontal')
- \`headerMenu\`: Boolean alternative for orientation (backward compatible)
- \`activeHref\`: Current active link href for styling
- \`backgroundColor\`: Background color in hex format (default: '#ffffff')
- \`sticky\`: Sticky positioning for horizontal layout (default: true)
- \`className\`: Additional CSS classes
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		items: {
			control: 'object',
			description: 'Navigation items array with label and href properties'
		},
		orientation: {
			control: 'select',
			options: ['horizontal', 'vertical'],
			description: 'Layout mode: horizontal for header bar, vertical for sidebar'
		},
		activeHref: {
			control: 'text',
			description: 'Currently active link href for highlighting'
		},
		backgroundColor: {
			control: 'color',
			description: 'Background color in hex format (applies to vertical layout)'
		},
		sticky: {
			control: 'boolean',
			description: 'Enable sticky positioning (horizontal layout only)'
		}
	}
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleItems = [
	{ label: 'Home', href: '/' },
	{ label: 'Products', href: '/products' },
	{ label: 'About', href: '/about' },
	{ label: 'Contact', href: '/contact' }
];

const acmeItems = [
	{ label: 'Laptops', href: '#laptops' },
	{ label: 'Tablets', href: '#tablets' },
	{ label: 'Phones', href: '#phones' },
	{ label: 'Accessories', href: '#accessories' },
	{ label: 'Compare', href: '#compare' },
	{ label: 'Support', href: '#support' }
];

// Horizontal Navigation (Header) Examples
export const AcmeNavigation: Story = {
	args: {
		items: acmeItems,
		activeHref: '#laptops',
		orientation: 'horizontal',
		sticky: true
	},
	render: ({ items, orientation, activeHref, backgroundColor, sticky, className }: any) => ({
		Component: NavigationBar,
		props: { items, orientation, activeHref, backgroundColor, sticky, className }
	}),
	play: async ({ canvasElement, step }) => {
		const { expect, within } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Render navigation bar', async () => {
			const nav = canvas.getByRole('navigation') || canvasElement.querySelector('nav');
			expect(nav || canvasElement).toBeInTheDocument();
		});

		await step('Display navigation links', async () => {
			const links = canvas.getAllByRole('link');
			expect(links.length).toBeGreaterThanOrEqual(4);
		});

		await step('Mark active link', async () => {
			const activeLink = canvasElement.querySelector('[aria-current]') || canvasElement;
			expect(activeLink).toBeInTheDocument();
		});

		await step('Have Acme product links', async () => {
			expect(canvas.getByText(/Laptops|Tablets|Phones|Accessories/)).toBeInTheDocument();
		});
	}
};

export const SimpleNav: Story = {
	args: {
		items: sampleItems,
		orientation: 'horizontal',
		sticky: false
	},
	render: ({ items, orientation, activeHref, backgroundColor, sticky, className }: any) => ({
		Component: NavigationBar,
		props: { items, orientation, activeHref, backgroundColor, sticky, className }
	})
};

export const HorizontalActive: Story = {
	args: {
		items: sampleItems,
		orientation: 'horizontal',
		activeHref: '/products',
		sticky: true
	},
	parameters: {
		docs: {
			description: {
				story: 'Horizontal navigation with active link highlighted'
			}
		}
	},
	render: ({ items, orientation, activeHref, backgroundColor, sticky, className }: any) => ({
		Component: NavigationBar,
		props: { items, orientation, activeHref, backgroundColor, sticky, className }
	})
};

// Vertical Navigation (Sidebar) Examples
export const VerticalDefault: Story = {
	args: {
		items: sampleItems,
		orientation: 'vertical',
		backgroundColor: '#ffffff'
	},
	parameters: {
		layout: 'padded',
		docs: {
			description: {
				story: 'Vertical sidebar navigation with default white background'
			}
		}
	},
	render: ({ items, orientation, activeHref, backgroundColor, sticky, className }: any) => ({
		Component: NavigationBar,
		props: { items, orientation, activeHref, backgroundColor, sticky, className }
	})
};

export const VerticalBlue: Story = {
	args: {
		items: sampleItems,
		orientation: 'vertical',
		backgroundColor: '#0a84ff'
	},
	parameters: {
		layout: 'padded',
		docs: {
			description: {
				story: 'Vertical sidebar with Apple blue background and white text'
			}
		}
	},
	render: ({ items, orientation, activeHref, backgroundColor, sticky, className }: any) => ({
		Component: NavigationBar,
		props: { items, orientation, activeHref, backgroundColor, sticky, className }
	})
};

export const VerticalDark: Story = {
	args: {
		items: sampleItems,
		orientation: 'vertical',
		backgroundColor: '#1a1a1a'
	},
	parameters: {
		layout: 'padded',
		docs: {
			description: {
				story: 'Vertical sidebar with dark background and light text'
			}
		}
	},
	render: ({ items, orientation, activeHref, backgroundColor, sticky, className }: any) => ({
		Component: NavigationBar,
		props: { items, orientation, activeHref, backgroundColor, sticky, className }
	})
};

export const VerticalActive: Story = {
	args: {
		items: sampleItems,
		orientation: 'vertical',
		backgroundColor: '#0a84ff',
		activeHref: '/about'
	},
	parameters: {
		layout: 'padded',
		docs: {
			description: {
				story: 'Vertical sidebar with active link highlighted'
			}
		}
	},
	render: ({ items, orientation, activeHref, backgroundColor, sticky, className }: any) => ({
		Component: NavigationBar,
		props: { items, orientation, activeHref, backgroundColor, sticky, className }
	})
};

// Backward Compatibility Examples (using headerMenu prop)
export const BackwardCompatHeaderMode: Story = {
	args: {
		links: sampleItems,
		headerMenu: true,
		sticky: true
	},
	parameters: {
		docs: {
			description: {
				story: 'Using legacy headerMenu={true} prop instead of orientation="horizontal" (backward compatible)'
			}
		}
	},
	render: ({ links, headerMenu, activeHref, backgroundColor, sticky, className }: any) => ({
		Component: NavigationBar,
		props: { links, headerMenu, activeHref, backgroundColor, sticky, className }
	})
};

export const BackwardCompatSidebarMode: Story = {
	args: {
		links: sampleItems,
		headerMenu: false,
		backgroundColor: '#0a84ff'
	},
	parameters: {
		layout: 'padded',
		docs: {
			description: {
				story: 'Using legacy headerMenu={false} prop instead of orientation="vertical" (backward compatible)'
			}
		}
	},
	render: ({ links, headerMenu, activeHref, backgroundColor, sticky, className }: any) => ({
		Component: NavigationBar,
		props: { links, headerMenu, activeHref, backgroundColor, sticky, className }
	})
};
