import type { Meta, StoryObj } from '@storybook/sveltekit';
import { expect, within } from '@storybook/test';
import SkipLink from '$lib/components/atoms/SkipLink.svelte';

const meta = {
	title: 'Atoms/SkipLink',
	component: SkipLink,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `
# SkipLink

A skip navigation link component that allows keyboard users to bypass repetitive content and navigate directly to the main content area.

## Accessibility Features

- **Screen Reader Only**: Visually hidden until focused using the \`sr-only\` / \`focus:not-sr-only\` pattern
- **High Contrast**: When focused, displays with high contrast colors for visibility
- **Fixed Position**: Appears at the top-left of the viewport when focused
- **Focus Management**: Automatically focuses the target element and scrolls it into view

## Usage

Place the SkipLink component at the very beginning of your page, before any navigation or header content:

\`\`\`svelte
<SkipLink href="#main-content" />
<Header />
<main id="main-content">
  <!-- Main content here -->
</main>
\`\`\`

## Keyboard Interaction

- **Tab**: Focus the skip link (when it's the first focusable element)
- **Enter/Space**: Activate the link and jump to the target element
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		href: {
			control: 'text',
			description:
				'Target element ID to skip to (with #). Should match the id of your main content area. Default is "#main-content".'
		},
		class: {
			control: 'text',
			description: 'Additional CSS classes for custom styling.'
		},
		children: {
			description:
				'Custom link text. Default is "Skip to main content". Use a Svelte snippet for custom content.'
		}
	}
} satisfies Meta<typeof SkipLink>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default skip link that navigates to #main-content.
 * Tab to this component to see it appear.
 */
export const Default: Story = {
	args: {
		href: '#main-content'
	},
	decorators: [
		() => ({
			Component: SkipLink,
			props: { href: '#demo-content' },
			// Add a demo main content area
			template: `
				<div style="min-height: 100vh; padding: 2rem;">
					<p style="margin-bottom: 1rem; color: #666;">Press Tab to reveal the skip link</p>
					<nav style="padding: 1rem; background: #f0f0f0; margin-bottom: 2rem;">
						<a href="#" style="margin-right: 1rem;">Home</a>
						<a href="#" style="margin-right: 1rem;">About</a>
						<a href="#" style="margin-right: 1rem;">Products</a>
						<a href="#">Contact</a>
					</nav>
					<main id="demo-content" style="padding: 2rem; background: #e8f4f8; border-radius: 8px;">
						<h1>Main Content Area</h1>
						<p>This is where the skip link will navigate to.</p>
					</main>
				</div>
			`
		})
	]
};

/**
 * Skip link with custom target.
 */
export const CustomTarget: Story = {
	args: {
		href: '#products-section'
	}
};

/**
 * The skip link is always visible in this story for demonstration purposes.
 * In production, it's only visible when focused.
 */
export const AlwaysVisible: Story = {
	args: {
		href: '#main-content',
		class: '!not-sr-only !static'
	}
};

// ============================================
// Play Tests - Focus & Accessibility
// ============================================

export const TestSkipLinkRendering: Story = {
	args: {
		href: '#main-content'
	},
	decorators: [
		() => ({
			Component: SkipLink,
			props: { href: '#demo-content' },
			template: `
				<div style="min-height: 100vh; padding: 2rem;">
					<p style="margin-bottom: 1rem; color: #666;">Press Tab to reveal the skip link</p>
					<nav style="padding: 1rem; background: #f0f0f0; margin-bottom: 2rem;">
						<a href="#" style="margin-right: 1rem;">Home</a>
						<a href="#" style="margin-right: 1rem;">About</a>
						<a href="#" style="margin-right: 1rem;">Products</a>
						<a href="#">Contact</a>
					</nav>
					<main id="demo-content" style="padding: 2rem; background: #e8f4f8; border-radius: 8px;">
						<h1>Main Content Area</h1>
						<p>This is where the skip link will navigate to.</p>
					</main>
				</div>
			`
		})
	],
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const skipLink = canvasElement.querySelector('a[href="#demo-content"]');
		expect(skipLink).toBeInTheDocument();
		expect(skipLink).toHaveAttribute('href', '#demo-content');
	}
};

export const TestSkipLinkHref: Story = {
	args: {
		href: '#main-content'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const skipLink = canvasElement.querySelector('a');
		if (skipLink) {
			expect(skipLink).toHaveAttribute('href', '#main-content');
		}
	}
};

export const TestSkipLinkCustomTarget: Story = {
	args: {
		href: '#products-section'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const skipLink = canvasElement.querySelector('a');
		if (skipLink) {
			expect(skipLink).toHaveAttribute('href', '#products-section');
		}
	}
};

export const TestSkipLinkA11y: Story = {
	args: {
		href: '#main-content'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const skipLink = canvasElement.querySelector('a');
		expect(skipLink).toBeInTheDocument();
		// Skip link should have accessible text
		if (skipLink && skipLink.textContent) {
			expect(skipLink.textContent.toLowerCase()).toContain('skip');
		}
	}
};

export const TestSkipLinkVisibility: Story = {
	args: {
		href: '#main-content',
		class: '!not-sr-only !static'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const skipLink = canvasElement.querySelector('a');
		expect(skipLink).toBeInTheDocument();
		expect(skipLink).toBeVisible();
	}
};
