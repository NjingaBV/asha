import type { Meta, StoryObj } from '@storybook/sveltekit';
import Badge from '$lib/components/atoms/Badge.svelte';

const meta = {
	title: 'Atoms/Badge',
	component: Badge,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
# Badge

A compact and versatile label component for highlighting status, categories, or additional information.

## Key Features

- **Multiple Variants**: _solid_, _outline_, and _ghost_ styles for different emphasis levels.
- **Semantic Colors**: Color options to represent success, warning, danger, etc.
- **Flexible Sizes**: Multiple sizes to adapt to various UI contexts.
- **Customizable Content**: Use the \`label\` prop for simple text or the default slot for rich content (icons, etc.).
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		label: {
			control: 'text',
			description:
				'Text content for the badge. Use for simple string labels. Omit to use children slot for custom content.'
		},
		tone: {
			control: { type: 'select' },
			options: ['primary', 'secondary', 'success', 'warning', 'danger', 'neutral', 'info'],
			description:
				'Semantic color tone: "primary" (accent) for brand/main actions, "secondary" for less prominent info, "success" for positive states, "warning" for caution, "danger" for errors/critical, "neutral" for general labels. Default is "primary".'
		},
		variant: {
			control: { type: 'select' },
			options: ['solid', 'outline', 'ghost'],
			description:
				'Visual style: "solid" for filled backgrounds (high emphasis), "outline" for bordered badges (medium emphasis), "ghost" for text-only (low emphasis). Default is "solid".'
		},
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg'],
			description:
				'Size variant: "sm" (text-xs, compact padding) for inline use, "md" (text-xs, standard padding) for general use, "lg" (text-sm, larger padding) for prominent displays. Default is "md".'
		},
		rounded: {
			control: 'boolean',
			description:
				'Shape style: true for fully rounded pill shape, false for subtle rounded corners. Default is true.'
		},
		children: {
			description:
				'Svelte snippet for custom badge content. Use when you need more than simple text (e.g., icons, counts, complex layouts).'
		}
	}
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		label: 'New',
		tone: 'primary',
		variant: 'solid',
		size: 'md',
		children: null
	}
};

export const Secondary: Story = {
	args: {
		...Primary.args,
		tone: 'secondary'
	}
};

export const Success: Story = {
	args: {
		...Primary.args,
		label: 'Available',
		tone: 'success'
	}
};

export const Warning: Story = {
	args: {
		...Primary.args,
		label: 'Limited',
		tone: 'warning'
	}
};

export const Danger: Story = {
	args: {
		...Primary.args,
		label: 'Sold Out',
		tone: 'danger'
	}
};

export const Info: Story = {
	args: {
		...Primary.args,
		label: 'Update',
		tone: 'info'
	}
};

export const Neutral: Story = {
	args: {
		...Primary.args,
		label: 'Edition',
		tone: 'neutral',
		size: 'sm'
	}
};

export const Outline: Story = {
	args: {
		...Primary.args,
		variant: 'outline'
	}
};

export const Ghost: Story = {
	args: {
		...Primary.args,
		variant: 'ghost'
	}
};

// ============================================
// Design Guidelines
// ============================================

/**
 * # Design Guidelines
 *
 * ## Usage
 * - Use **Solid** badges for high-priority status indicators (e.g., "New", "Sold Out").
 * - Use **Outline** badges for secondary attributes (e.g., "Beta", "v1.0").
 * - Use **Ghost** badges for subtle metadata (e.g., tags, counts).
 *
 * ## Do's
 * - Keep label text short (1-2 words).
 * - Use semantic tones (Success, Warning) appropriately for their meaning.
 * - Use the rounded pill shape for standard status indicators.
 *
 * ## Don'ts
 * - Don't use badges for interactive elements (use Buttons or Chips instead).
 * - Avoid using too many badges in a single view (clutter).
 * - Don't mix different badge sizes in the same context.
 */
export const Guidelines: Story = {
	tags: ['!dev'],
	render: () => ({
		Component: Badge,
		props: {
			label: 'See Guidelines in Docs',
			tone: 'primary',
			variant: 'solid'
		}
	})
};
