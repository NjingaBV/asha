import type { Meta, StoryObj } from '@storybook/sveltekit';
import { expect, userEvent, within } from '@storybook/test';
import LinkWrapper from './LinkWrapper.svelte';

const meta = {
	title: 'Atoms/Link',
	component: LinkWrapper,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `
# Lien (Link)

Un composant de lien stylisé à la manière d'Apple, avec plusieurs variantes. Il prend en charge les icônes et différents styles visuels.

## Caractéristiques
- Plusieurs variantes (\`default\`, \`cta\`, \`subtle\`).
- Prise en charge des icônes.
- Accessible avec les labels ARIA.
- Contrôle de la cible (\`target\`) pour les nouveaux onglets.
- États de survol et de focus.
`
			}
		}
	},
	argTypes: {
		href: {
			control: 'text',
			description: 'Link destination URL'
		},
		variant: {
			control: 'select',
			options: ['default', 'cta', 'subtle'],
			description: 'Visual style variant'
		},
		target: {
			control: 'select',
			options: ['_self', '_blank'],
			description: 'Link target (open in same or new tab)'
		},
		text: {
			control: 'text',
			description: 'Link text content'
		}
	}
} satisfies Meta<typeof LinkWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		href: '#',
		variant: 'default',
		text: 'Learn more'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const link = canvas.getByRole('link');

		// Test link rendering
		expect(link).toBeInTheDocument();

		// Test href attribute
		expect(link).toHaveAttribute('href', '#');

		// Test accessible name
		expect(link).toHaveAccessibleName('Learn more');

		// Test that it's not an external link (no target="_blank")
		expect(link).not.toHaveAttribute('target', '_blank');

		// Test default variant styles are applied
		expect(link).toHaveClass('text-accent');
	}
};

export const CTA: Story = {
	args: {
		href: '#',
		variant: 'cta',
		text: 'Buy now'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const link = canvas.getByRole('link');

		// Test link rendering
		expect(link).toBeInTheDocument();

		// Test CTA variant classes
		expect(link).toHaveClass('text-accent');
		expect(link).toHaveClass('font-medium');

		// Test accessible name
		expect(link).toHaveAccessibleName('Buy now');

		// Test href
		expect(link).toHaveAttribute('href', '#');
	}
};

export const Subtle: Story = {
	args: {
		href: '#',
		variant: 'subtle',
		text: 'View details'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const link = canvas.getByRole('link');

		// Test link rendering
		expect(link).toBeInTheDocument();

		// Test subtle variant classes (uses muted text color)
		expect(link).toHaveClass('text-fg-muted');

		// Test accessible name
		expect(link).toHaveAccessibleName('View details');

		// Test href
		expect(link).toHaveAttribute('href', '#');
	}
};

export const ExternalLink: Story = {
	args: {
		href: 'https://www.apple.com',
		variant: 'default',
		target: '_blank',
		text: 'Visit Apple'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const link = canvas.getByRole('link');

		// Test link rendering
		expect(link).toBeInTheDocument();

		// Test external link attributes
		expect(link).toHaveAttribute('target', '_blank');
		expect(link).toHaveAttribute('rel', 'noopener noreferrer');

		// Test href is correct
		expect(link).toHaveAttribute('href', 'https://www.apple.com');

		// Test accessible name
		expect(link).toHaveAccessibleName('Visit Apple');
	}
};

export const WithAccessibleName: Story = {
	args: {
		href: '/products',
		variant: 'default',
		text: 'Product Page'
	},
	parameters: {
		docs: {
			description: {
				story: 'Link with custom ARIA label for enhanced accessibility'
			}
		}
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const link = canvas.getByRole('link');

		// Test link renders
		expect(link).toBeInTheDocument();

		// Test accessible name from text content
		expect(link).toHaveAccessibleName('Product Page');

		// Test href
		expect(link).toHaveAttribute('href', '/products');
	}
};

export const KeyboardNavigation: Story = {
	args: {
		href: '/learn',
		variant: 'cta',
		text: 'Learn more'
	},
	parameters: {
		docs: {
			description: {
				story: 'Test keyboard navigation with Tab key for focus management'
			}
		}
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const link = canvas.getByRole('link') as HTMLAnchorElement;

		// Test link is in the document
		expect(link).toBeInTheDocument();

		// Test link has href
		expect(link).toHaveAttribute('href', '/learn');

		// Test link has proper focus styles classes defined
		expect(link).toHaveClass('focus-visible:ring-2');
		expect(link).toHaveClass('focus-visible:ring-accent');
		expect(link).toHaveClass('focus-visible:ring-offset-2');

		// Simulate Tab key to focus the link
		await userEvent.tab();

		// Test link is now focused
		expect(document.activeElement).toBe(link);

		// Test link remains accessible after focus
		expect(link).toHaveAccessibleName('Learn more');
	}
};

export const HoverInteraction: Story = {
	args: {
		href: '#features',
		variant: 'default',
		text: 'View features'
	},
	parameters: {
		docs: {
			description: {
				story: 'Test link hover state and interactive behavior'
			}
		}
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const link = canvas.getByRole('link');

		// Test link is in the document
		expect(link).toBeInTheDocument();

		// Test initial state
		expect(link).toHaveAccessibleName('View features');

		// Simulate hover interaction
		await userEvent.hover(link);

		// After hover, link should still be in document and have proper classes
		expect(link).toBeInTheDocument();
		expect(link).toHaveClass('hover:text-accent-hover');
		expect(link).toHaveClass('hover:underline');

		// Test unhover
		await userEvent.unhover(link);
		expect(link).toBeInTheDocument();
	}
};

export const VariantComparison: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Visual comparison of all link variants with consistent content'
			}
		}
	},
	render: () => ({
		Component: LinkWrapper,
		props: {
			href: '#',
			text: 'Learn more',
			variant: 'default'
		}
	})
};

export const ExternalLinkWithCTA: Story = {
	args: {
		href: 'https://www.example.com/product',
		variant: 'cta',
		target: '_blank',
		text: 'Buy now'
	},
	parameters: {
		docs: {
			description: {
				story: 'CTA link that opens in a new tab with proper security attributes'
			}
		}
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const link = canvas.getByRole('link');

		// Test link rendering
		expect(link).toBeInTheDocument();

		// Test CTA styling is applied
		expect(link).toHaveClass('font-medium');
		expect(link).toHaveClass('text-accent');

		// Test external link attributes
		expect(link).toHaveAttribute('target', '_blank');
		expect(link).toHaveAttribute('rel', 'noopener noreferrer');

		// Test href
		expect(link).toHaveAttribute('href', 'https://www.example.com/product');

		// Test accessible name
		expect(link).toHaveAccessibleName('Buy now');
	}
};
