import type { Meta, StoryObj } from '@storybook/sveltekit';
import Eyebrow from '@/lib/components/atoms/Eyebrow.svelte';

const meta = {
	title: 'Atoms/Eyebrow',
	component: Eyebrow,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `# Eyebrow

A small, uppercase label that appears above headings to provide context, category, or branding information.

## Key Features

- **Uppercase Styling**: Automatically transforms text to uppercase with wide letter spacing
- **Semantic Hierarchy**: Positioned above main headings to establish content hierarchy
- **Simple Alignment**: Center or left alignment options
- **Subtle Styling**: Slate gray color and small size for non-intrusive labeling
- **Flexible Content**: Accepts text prop or children for custom content

## Use Cases

- **Section Labels**: Identify content sections (e.g., "Features", "Pricing", "About")
- **Product Categories**: Show product line or category (e.g., "Apple Watch", "MacBook Pro")
- **Content Tags**: Indicate content type (e.g., "Blog Post", "Tutorial", "News")
- **Temporal Context**: Display date or time context (e.g., "Coming Soon", "Now Available")
- **Brand Identity**: Reinforce brand or sub-brand naming

## Best Practices

- **Pair with Headings**: Always use immediately above a heading element for proper hierarchy
- **Keep Brief**: Use 1-3 words maximum for optimal readability and impact
- **Consistent Styling**: Don't override the uppercase transformation—it's a key characteristic
- **Use Sparingly**: Eyebrows add visual weight; use only when context is needed
- **Alignment Consistency**: Match alignment with the heading below

## Accessibility

- Uses semantic \`<p>\` element for proper text flow
- Screen readers will announce eyebrow text before the associated heading
- Color contrast meets WCAG AA standards
- Natural reading order when placed before heading elements`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		text: {
			control: 'text',
			description: 'The eyebrow text content. Keep it short (1-3 words) for best results.'
		},
		align: {
			control: { type: 'select' },
			options: ['left', 'center'],
			description:
				'Text alignment: "center" for hero sections and centered layouts, "left" for left-aligned content sections. Default is "center".'
		},
		children: {
			description:
				'Svelte snippet for custom content. Use when you need more than plain text (e.g., icons, styled text).'
		}
	}
} satisfies Meta<typeof Eyebrow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		text: 'Apple Watch',
		align: 'center'
	}
};

export const Center: Story = {
	args: {
		...Primary.args
	}
};

export const Left: Story = {
	args: {
		...Primary.args,
		text: 'Series 10',
		align: 'left'
	}
};
