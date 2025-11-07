import type { Meta, StoryObj } from '@storybook/sveltekit';
import Badge from '@/lib/components/atoms/Badge.svelte';

const meta = {
	title: 'Atoms/Badge',
	component: Badge,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `# Badge

A compact, versatile label component for highlighting status, categories, or supplementary information.

## Key Features

- **Multiple Variants**: Solid, outline, and ghost styles for different emphasis levels
- **Semantic Colors**: Six color options (primary, secondary, success, warning, danger, neutral) with meaningful associations
- **Flexible Sizing**: Three size options (sm, base, lg) for different contexts
- **Rounded Options**: Toggle between fully rounded (pill shape) or slightly rounded corners
- **Snippet Support**: Use label prop for simple text or children for custom content

## Use Cases

- **Status Indicators**: Show product availability, order status, or account status
- **Category Labels**: Tag content with categories, topics, or filters
- **Notifications**: Display unread counts or new content indicators
- **Feature Highlights**: Call attention to new features or special offers
- **Metadata Tags**: Show version numbers, edition types, or other metadata

## Best Practices

- **Color Meaning**: Use semantic colors consistently (success=available, danger=error, warning=caution)
- **Text Length**: Keep badge text short (1-2 words) for optimal readability
- **Contrast**: Solid variant provides best contrast, use for critical information
- **Sizing Context**: Use sm for inline text, base for cards/lists, lg for prominent displays
- **Avoid Overuse**: Too many badges can overwhelm users; use sparingly for emphasis

## Accessibility

- Badges are inline elements that screen readers will announce naturally
- Color is not the sole indicator of meaning (text provides context)
- Sufficient contrast ratios for all color variants (WCAG AA compliant)
- Consider adding aria-label for icon-only badges`
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
		color: {
			control: { type: 'select' },
			options: ['primary', 'secondary', 'success', 'warning', 'danger', 'neutral'],
			description:
				'Semantic color scheme: "primary" (blue) for brand/main actions, "secondary" (slate) for less prominent info, "success" (emerald) for positive states, "warning" (amber) for caution, "danger" (red) for errors/critical, "neutral" (gray) for general labels. Default is "primary".'
		},
		variant: {
			control: { type: 'select' },
			options: ['solid', 'outline', 'ghost'],
			description:
				'Visual style: "solid" for filled backgrounds (high emphasis), "outline" for bordered badges (medium emphasis), "ghost" for text-only (low emphasis). Default is "solid".'
		},
		badgeSize: {
			control: { type: 'select' },
			options: ['sm', 'base', 'lg'],
			description:
				'Size variant: "sm" (text-xs, compact padding) for inline use, "base" (text-xs, standard padding) for general use, "lg" (text-sm, larger padding) for prominent displays. Default is "base".'
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
		color: 'primary',
		variant: 'solid',
		badgeSize: 'base',
		children: null
	}
};

export const Secondary: Story = {
	args: {
		...Primary.args,
		color: 'secondary'
	}
};

export const Success: Story = {
	args: {
		...Primary.args,
		label: 'Available',
		color: 'success'
	}
};

export const Warning: Story = {
	args: {
		...Primary.args,
		label: 'Limited',
		color: 'warning'
	}
};

export const Danger: Story = {
	args: {
		...Primary.args,
		label: 'Sold Out',
		color: 'danger'
	}
};

export const Neutral: Story = {
	args: {
		...Primary.args,
		label: 'Edition',
		color: 'neutral',
		badgeSize: 'sm'
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
